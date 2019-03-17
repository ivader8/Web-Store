const mongoose = require('mongoose')

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

let orderSchema = mongoose.Schema({
  // creator: {type: mongoose.Schema.Types.ObjectId, required: REQUIRED_VALIDATION_MESSAGE},
  username: {type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE, unique: true},
 
  title: {type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE},
 
  date: {
    // type: mongoose.Schema.Types.Date, required: REQUIRED_VALIDATION_MESSAGE, 
    type: mongoose.Schema.Types.Date, default: Date.now},
  
  // status: {
  //   type: mongoose.Schema.Types.String,
  //   enum: {
  //     values: ['Pending', 'Approved', 'Delivered'],
  //     message: 'Status is invalid, valid values include [Pending, Approved, Delivered].'
  //   },
    // default: 'Pending'
    // required: REQUIRED_VALIDATION_MESSAGE
  // }
})

let Order = mongoose.model('Order', orderSchema)

module.exports = Order
