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
        unique: true,
      },
      imageUrl: {
        type: String,
        required: true,
        unique: true,
      },
      price: {
        type: Number,
        required: true,
        unique: true,
      },
      quantity: {
        type: Number,
        required: true,
        unique: true,
      },
      _id: false
    }
  ],
})

module.exports = mongoose.model('Cart', userSchema)
