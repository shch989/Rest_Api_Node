const express = require('express')
const router = express.Router();
const shopController = require('../controllers/shop')

// /shop/ => GET <모든 상품 불러오기>
router.get('/', shopController.getProduct)
// /shop/products => GET
router.get('/products')
// /shop/cart => GET
router.get('cart')
// /shop/checkout => GET
router.get('/checkout')

module.exports = router;