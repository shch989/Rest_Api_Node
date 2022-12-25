const express = require('express')
const router = express.Router();
const adminController = require('../controllers/admin')

// /admin/add-product => POST <상품 등록>
router.post('/add-product', adminController.postAddProduct)
// /admin/:itemId/edit-product => PUT <상품 수정>
router.put('/:itemId/edit-product', adminController.putEditProduct)

module.exports = router;