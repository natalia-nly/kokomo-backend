const mongoose = require('mongoose')
const Schema = mongoose.Schema

const propertySchema = new Schema(
   {
      name: { type: String },
      owner: { type: Schema.Types.ObjectId, ref: 'Customer' },
      description: { type: String },
      categories: [{ type: String }],
      media: [{ type: String }],
      location: {
         name: { type: String },
         lat: { type: Number },
         long: { type: Number }
      },
      availablePlaces: { type: Number },
      weekDays: [{ type: String }],
      timeRanges: [{ start: String, end: String }],
      comments: [
         {
            user: { type: Schema.Types.ObjectId, ref: 'Customer' },
            comment: { type: String }
         }
      ],
      rating: [{ type: Number }],
      bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking' }],
      active: { type: Boolean, default: true }
   },
   {
      timestamps: {
         createdAt: 'createdAt',
         updatedAt: 'updatedAt'
      }
   }
)

const Property = mongoose.model('Property', propertySchema)

module.exports = Property
