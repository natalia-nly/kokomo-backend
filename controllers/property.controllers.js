const Property = require('../models/property.model')
const Schedule = require('../models/schedule.model')
const Booking = require('../models/booking.model')
const Customer = require('../models/customer.model')

exports.allProperties = async (req, res) => {
   try {
      const allProperties = await Property.find({ active: true })

      return res.status(200).json(allProperties)
   } catch (error) {
      console.log(error)
      res.status(500).send(error)
   }
}

exports.registerProperty = async (req, res) => {
   try {
      const newProperty = await Property.create(req.body)
      await Customer.findByIdAndUpdate(req.body.owner, {
         $push: {
            ownProperties: newProperty._id
         }
      })

      return res.status(200).json(newProperty)
   } catch (error) {
      console.log(error)
      res.status(500).send(error)
   }
}

exports.viewProperty = async (req, res) => {
   try {
      const today = new Date()
      const sevenDaysLater = new Date()
      sevenDaysLater.setDate(today.getDate() + 7)

      const property = await Property.findById(req.params.propertyId).populate(
         'bookings'
      )

      return res.status(200).json(property)
   } catch (error) {
      console.log(error)
      res.status(500).send(error)
   }
}

exports.updateProperty = async (req, res) => {
   try {
      await Property.findByIdAndUpdate(req.params.propertyId, req.body)
      return res.sendStatus(200)
   } catch (error) {
      console.log(error)
      res.status(500).send(error)
   }
}

//Añadir un favorito
exports.loveProperty = (req, res, next) => {
   const sessionUser = req.session.currentUser || req.user
   console.log('ID DE LA PROPERTY: ', req.params.propertyId)
   if (sessionUser) {
      Property.findById(req.params.propertyId)
         .then((resultado) => {
            console.log(resultado)
            return Customer.update(
               {
                  _id: sessionUser._id,
                  favourites: {
                     $ne: resultado
                  }
               },
               {
                  $addToSet: {
                     favourites: resultado
                  }
               },
               { new: true }
            )
         })
         .then((customer) => {
            console.log('Usuario actualizado', customer)
            const favourites = customer
            res.status(200).json(favourites)
         })
         .catch((error) => {
            console.log('Error: ', error)
         })
   }
}

//Añadir comentario
exports.addComment = (req, res) => {
   const { username, comment, avatar } = req.body

   const newComment = {
      username,
      comment,
      avatar
   }

   Property.findByIdAndUpdate(
      req.params.propertyId,
      {
         $push: {
            comments: newComment,
            'rating.counter': req.body.rating
         }
      },
      { new: true }
   ).then((propertyUpdated) => {
      res.status(200).json(propertyUpdated)
   })
}

//Borrar local
exports.deleteProperty = (req, res) => {
   const sessionUser = req.user
   const propertyId = req.params.propertyId
   const p1 = Schedule.findOneAndDelete({ property: propertyId })
   const p2 = Customer.findByIdAndUpdate(
      {
         _id: sessionUser._id
      },
      {
         $pull: {
            ownProperties: propertyId
         }
      }
   )
   const p3 = Property.findByIdAndDelete(propertyId)
   Promise.all([p1, p2, p3])
      .then((resultados) => {
         res.status(200).json(resultados)
      })
      .catch((error) => {
         console.log('Error: ', error)
      })
}
