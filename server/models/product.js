const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // 필수 입력
    trim: true, // 공백 제거
    minlength: 2, // 최소 2글자
    maxlength: 30, // 최대 30글자
  },
  imageUrl: {
    type: String,
    required: true, // 필수 입력
    trim: true, // 공백 제거
  },
  description: {
    type: String,
    required: true, // 필수 입력
    trim: true, // 공백 제거
    minlength: 5, // 최소 5글자
    maxlength: 255, // 최대 255글자
  },
  price: {
    type: Number,
    required: true, // 필수 입력
    trim: true, // 공백 제거
  }
})

module.exports = mongoose.model('Product', userSchema)
