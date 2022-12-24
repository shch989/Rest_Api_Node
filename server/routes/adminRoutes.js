const express = require('express')
const router = express.Router();
const { postItem, getItems, postFindItem } = require('../controllers/adminController')

// /admin/product => POST
router.post('/product', postItem)
router.get('/product', getItems)
router.post('/product-find', postFindItem)

module.exports = router;