const express = require('express')
const router = express.Router();
const shopController = require('../controllers/shop')

// /shop/products => GET <모든 상품 불러오기>
router.get('/products', shopController.getProduct)
// /shop/products/:userId => GET <회원의 상품만 불러오기>
router.get('/products/:userId', shopController.getUserProducts)
// /shop/product-detail/:prodId => GET <특정 상품만 자세히보기>
router.get('/product-detail/:prodId', shopController.getProductDetail)

module.exports = router;