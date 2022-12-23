const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const dbConnect = () => {
  mongoose.set('strictQuery', true)
  try {
    mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true })
    console.log('몽구스 연결 성공')
  } catch (err) {
    console.log('몽구스 연결 실패', err)
  }
}

module.exports = dbConnect