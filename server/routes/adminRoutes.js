const express = require('express')
const router = express.Router();
const { postItem } = require('../controllers/adminController')

// /admin/product => POST
router.post('/product', postItem)

module.exports = router;