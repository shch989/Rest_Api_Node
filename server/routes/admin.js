const express = require('express')
const router = express.Router();
const adminController = require('../controllers/admin')

// /admin/add-product => POST <상품 등록>
router.post('/add-product', adminController.postAddProduct)

module.exports = router;