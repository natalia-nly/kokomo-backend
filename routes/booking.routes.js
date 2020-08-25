const express = require('express');
const router  = express.Router();
const bookingController = require('../controllers/booking.controllers');

//Creación del booking
router.post('/booking/:bookingId', bookingController.createBooking);
//Ver bookings
router.get("/my-bookings", bookingController.myBookings);
//Detalles del Booking
router.get('/booking/details/:bookingId', bookingController.bookingDetails);
//Borrar bookings
router.get('/booking/delete/:bookingId', bookingController.deleteBooking);

module.exports = router;