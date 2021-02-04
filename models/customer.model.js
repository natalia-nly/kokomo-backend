const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customerSchema = new Schema(
   {
      username: {
         type: String,
         trim: true,
         required: [true, 'Username is required.'],
         unique: true
      },
      telNumber: {
         type: Number
      },
      email: {
         type: String,
         trim: true,
         required: [true, 'Email is required.'],
         unique: true
      },
      googleID: String,
      passwordHash: {
         type: String
      },
      avatar: {
         type: String,
         default: 'https://i.ya-webdesign.com/images/avatar-icon-png-5.png'
      },
      bookings: [
         {
            type: Schema.Types.ObjectId,
            ref: 'Booking'
         }
      ],
      favourites: [
         {
            type: Schema.Types.ObjectId,
            ref: 'Property'
         }
      ],
      owner: {
         type: Boolean,
         default: false
      },
      ownProperties: [
         {
            type: Schema.Types.ObjectId,
            ref: 'Property'
         }
      ],
      messages: [
         {
            fromUser: String,
            refUser: [
               {
                  type: Schema.Types.ObjectId,
                  ref: 'Customer'
               }
            ],
            avatar: String,
            topic: String,
            message: String
         }
      ]
   },

   {
      timestamps: {
         createdAt: 'createdAt',
         updatedAt: 'updatedAt'
      }
   }
)

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer
