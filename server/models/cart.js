const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  items: [
    {
      id: {
        type: String,
        required: true,
        unique: true,
      },
      title: {
        type: String,
        required: true,
      },
      imageUrl: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        min: 1,
        required: true,
      },
    totalPrice: {
      type: Number,
      required: true,
    },
    _id: false
    }
  ],
})

module.exports = mongoose.model('Cart', userSchema)
