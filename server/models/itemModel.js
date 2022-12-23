const mongoose = require('mongoose') // Erase if already required

// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
})

//Export the model
module.exports = mongoose.model('Item', userSchema)
