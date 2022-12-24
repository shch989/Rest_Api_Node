const express = require('express')
const router = express.Router();
const { postItem, getItems } = require('../controllers/adminController')

// /admin/product => POST
router.post('/product', postItem)
router.get('/product', getItems)

module.exports = router;