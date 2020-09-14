const Property = require("../models/property.model");
const Schedule = require("../models/schedule.model");
const Booking = require("../models/booking.model");
const Customer = require("../models/customer.model");

//Creador de Código de Reserva
function uniqueId(stringLength, possible) {
  stringLength = 5;
  possible = "ABCDEFGHJKMNPQRSTUXY12345";
  let text = "";

  for (let i = 0; i < stringLength; i++) {
    let character = getCharacter(possible);
    while (text.length > 0 && character === text.substr(-1)) {
      character = getCharacter(possible);
    }
    text += character;
  }
  return text;
}
function getCharacter(possible) {
  return possible.charAt(Math.floor(Math.random() * possible.length));
}
//Formateo de fecha
function formattedDate(d) {
  let month = String(d.getMonth() + 1);
  let day = String(d.getDate());
  const year = String(d.getFullYear());
  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  return `${day}/${month}/${year}`;
}
//Creación del Booking
exports.createBooking = (req, res, next) => {
  console.log("Schedule ID: ", req.params.scheduleId);
  console.log("Body: ", req.body);
  const sessionUser = req.session.currentUser || req.user;
  let {
    day,
    guests
  } = req.body;
  Schedule.find({
      "timeBoxes._id": {
        $eq: req.params.scheduleId,
      },
    })
    .then(([schedule]) => {
      console.log('schedule:',schedule)
      //Filtrar el timebox seleccionado
      const [finalTimebox] = schedule.timeBoxes.filter(
        (element) => element._id == req.params.scheduleId
      );
      const [{
        startTime
      }] = schedule.timeBoxes.filter(
        (element) => element._id == req.params.scheduleId
      );
      const bookingRef = uniqueId();
      day = formattedDate(new Date(day));
      const remainingUpdate = finalTimebox.remaining - guests;
      let propertyId = schedule.property
      Schedule.updateOne({
        property: propertyId,
        "timeBoxes._id": req.params.scheduleId,
      }, {
        $set: {
          "timeBoxes.$.remaining": remainingUpdate,
        },
      }).then((finalbox) => console.log(finalbox));
      //Crear la reserva en la colección de bookings
      return Booking.create({
        customer: sessionUser._id,
        /*customerName: sessionUser.username,
        telNumber: sessionUser.telNumber,*/
        property: propertyId,
        day: day,
        bookingRef: bookingRef,
        timeBox: finalTimebox._id,
        time: finalTimebox.startTime,
        guests: guests,
      });
    })
    .then((booking) => {
      //console.log("Customer: ",req.session.currentUser._id);
      console.log("Reserva creada: ", booking);
      res.status(200).json(booking);
      // Actualizar el perfil del cliente
      Customer.findByIdAndUpdate(
          sessionUser._id, {
            $push: {
              bookings: booking._id,
            },
          }, {
            new: true,
          }
        )
        .then((customer) => console.log(customer))
        .catch((error) => {
          console.log("Error: ", error);
        });
      // GUARDANDO LA RESERVA EN LA PROPERTY
      Property.findByIdAndUpdate(
          booking.property, {
            $push: {
              bookings: booking._id,
            },
          }, {
            new: true,
          }
        )
        .then((customer) => console.log(customer))
        .catch((error) => {
          console.log("Error: ", error);
        });
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
};
//Ver Bookings - listado
exports.myBookings = (req, res, next) => {
  const sessionUser = req.user;
console.log(sessionUser)
    Customer.findById(sessionUser._id)
      .populate({
        path: 'bookings',
        populate: {
          path: 'property'
        }
      })
      .then(user => {
        res.status(200).json(user);
      }).catch(error => next(error));
  
};

exports.myPropertiesBookings = (req, res, next) => {
  const sessionUser =  req.user;
  // BOOKINGS DEL OWNER
  if (sessionUser.owner) {
    Customer.findById(sessionUser._id).populate({
        path: 'ownProperties',
        populate: {
          path: 'bookings',
          populate: {
            path: 'customer',
            select: ['username','email','telNumber']
          }
        } 
      })
      .then(user => {
        console.log("USER CON DEEP POPULATE: ", user);
        res.status(200).json(user);
      }).catch(error => next(error));
  }
};

//Detalles del booking
exports.bookingDetails = (req, res) => {
  Booking.findById(req.params.bookingId)
  .populate({
    path: 'customer',
  })
    .then((booking) => {
      console.log("BOOKING: ", booking);
      res.status(200).json(booking);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
};
//Borrar una reserva
exports.deleteBooking = (req, res) => {
  console.log('Este es el booking a borrar:',req.params.bookingId)
  const bookingId = req.params.bookingId;
  const sessionUser = req.session.currentUser || req.user;
  Booking.findById(bookingId).then((booking) => {
    console.log("this is booking", booking);
    Schedule.update({
      "timeBoxes._id": booking.timeBox,
    }, {
      $inc: {
        "timeBoxes.$.remaining": booking.guests,
      },
    });
  });
  const p1 = Booking.findByIdAndDelete(bookingId);
  const p2 = Customer.findByIdAndUpdate({
    _id: sessionUser._id,
  }, {
    $pull: {
      bookings: bookingId,
    },
  });
  const p3 = Property.findOneAndUpdate({bookings:{$in:[bookingId]}}, {
    $pull: {
      bookings: bookingId,
    },
  });
  Promise.all([p1, p2, p3])
    .then((resultados) => {
      res.status(200).json(resultados);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
};