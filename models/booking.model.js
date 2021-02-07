const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookingSchema = new Schema(
   {
      customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
      property: { type: Schema.Types.ObjectId, ref: 'Property' },
      active: { type: Boolean, default: true },
      bookingRef: String,
      day: {type: Date},
      timeRange: [{start: String, end: String}],
      guests: Number
   },
   {
      timestamps: {
         createdAt: 'createdAt',
         updatedAt: 'updatedAt'
      }
   }
)

const Booking = mongoose.model('Booking', bookingSchema)

module.exports = Booking
