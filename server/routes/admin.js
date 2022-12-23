const express = require('express')
const router = express.Router();

router.post('/product', (req, res, next) => {
  const item = req.body
  res.status(200).json({
    title: item.title
  })
})

module.exports = router;