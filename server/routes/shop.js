const express = require('express')
const router = express.Router();
const shopController = require('../controllers/shop')

// /shop/products => GET <모든 상품 불러오기>
router.get('/products', shopController.getProduct)
// /shop/cart => GET
router.get('/product-detail/:prodId', shopController.getProductId)
// /shop/checkout => GET
router.get('/checkout')

module.exports = router;