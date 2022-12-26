const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
// 몽구스 연결
const dbConnect = require('./config/connect_db')
// Error 컨트롤러
const errorController = require('./controllers/error')
// 라우터 연결
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const cartRoutes = require('./routes/cart')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

dbConnect()

app.use('/admin', adminRoutes)
app.use('/shop', shopRoutes)
app.use('/cart', cartRoutes)

app.use(errorController.get404)

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}/`)
})