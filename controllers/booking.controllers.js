const Property = require('../models/property.model')
const Schedule = require('../models/schedule.model')
const Booking = require('../models/booking.model')
const Customer = require('../models/customer.model')

//Creación del Booking
exports.createBooking = async (req, res) => {
   try {
      const refNumber = (await Booking.countDocuments()) + 1
      const ref = `BK-${String(refNumber).padStart(6, '0')}`

      const sessionUser = req.session.currentUser || req.user
      let { day, guests } = req.body

      const schedule = await Schedule.findOne({
         'timeBoxes._id': { $eq: req.params.scheduleId }
      })

      //Filtrar el timebox seleccionado
      const [finalTimebox] = schedule.timeBoxes.filter(
         (element) => element._id == req.params.scheduleId
      )

      const remainingUpdate = finalTimebox.remaining - guests
      let propertyId = schedule.property

      await Schedule.updateOne(
         { property: propertyId, 'timeBoxes._id': req.params.scheduleId },
         { $set: { 'timeBoxes.$.remaining': remainingUpdate } }
      )
      //Crear la reserva en la colección de bookings
      const booking = await Booking.create({
         customer: sessionUser._id,
         property: propertyId,
         day: day,
         bookingRef: ref,
         timeBox: finalTimebox._id,
         time: finalTimebox.startTime,
         guests: guests
      })
      // Actualizar el perfil del cliente
      await Customer.findByIdAndUpdate(sessionUser._id, {
         $push: { bookings: booking._id }
      })
      // GUARDANDO LA RESERVA EN LA PROPERTY
      await Property.findByIdAndUpdate(booking.property, {
         $push: { bookings: booking._id }
      })

      res.status(200).json(booking)
   } catch (error) {
      return res.status(500).send(error)
   }
}

exports.myBookings = async (req, res) => {
   try {
      const sessionUser = req.user
      const user = await Customer.findById(sessionUser._id).populate({
         path: 'bookings',
         populate: { path: 'property' }
      })
      res.status(200).json(user)
   } catch (error) {
      return res.status(500).send(error)
   }
}

exports.myPropertiesBookings = async (req, res) => {
   try {
      const sessionUser = req.user
      if (sessionUser.owner) {
         const user = await Customer.findById(sessionUser._id).populate({
            path: 'ownProperties',
            populate: {
               path: 'bookings',
               populate: {
                  path: 'customer',
                  select: 'username email telNumber'
               }
            }
         })

         return res.status(200).json(user)
      }

      res.sendStatus(200)
   } catch (error) {
      return res.status(500).send(error)
   }
}

exports.bookingDetails = async (req, res) => {
   try {
      const booking = await Booking.findById(req.params.bookingId).populate({
         path: 'customer'
      })

      res.status(200).json(booking)
   } catch (error) {
      return res.status(500).send(error)
   }
}

exports.deleteBooking = async (req, res) => {
   try {
      const { bookingId } = req.params
      const sessionUser = req.session.currentUser || req.user
      const booking = await Booking.findByIdAndUpdate(bookingId, {
         active: false
      })
      await Schedule.update(
         { 'timeBoxes._id': booking.timeBox },
         { $inc: { 'timeBoxes.$.remaining': booking.guests } }
      )
      await Customer.findByIdAndUpdate(
         { _id: sessionUser._id },
         { $pull: { bookings: bookingId } }
      )
      await Property.findOneAndUpdate(
         { bookings: { $in: [bookingId] } },
         { $pull: { bookings: bookingId } }
      )
      res.sendStatus(200)
   } catch (error) {
      return res.status(500).send(error)
   }
}
