const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
// 몽구스 연결
const dbConnect = require('./config/connect_db')
// 라우터 연결
const adminRoutes = require('./routes/adminRoutes')
const shopRoutes = require('./routes/shopRoutes')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

dbConnect()

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use((req, res, next) => {
  res.status(404).send("<h1>404 Page Not Found.</h1>")
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}/`)
})