const express = require('express');
const router  = express.Router();
const bookingController = require('../controllers/booking.controllers');

//Creación del booking
router.post('/create-booking/:scheduleId', bookingController.createBooking);
//Ver bookings
router.get("/my-bookings", bookingController.myBookings);
//Ver bookings en Properties
router.get("/my-properties-bookings", bookingController.myPropertiesBookings);
//Detalles del Booking
router.get('/details/:bookingId', bookingController.bookingDetails);
//Borrar booking
//
router.post('/delete/:bookingId', bookingController.deleteBooking);

module.exports = router;