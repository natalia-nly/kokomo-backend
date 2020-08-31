const express = require('express');
const router  = express.Router();
const bookingController = require('../controllers/booking.controllers');

//Creación del booking
router.post('/create-booking/:scheduleId', bookingController.createBooking);
//Ver bookings
router.get("/my-bookings", bookingController.myBookings);
//Detalles del Booking
router.get('/details/:bookingId', bookingController.bookingDetails);
//Borrar bookings
router.post('/delete/:bookingId', bookingController.deleteBooking);

module.exports = router;