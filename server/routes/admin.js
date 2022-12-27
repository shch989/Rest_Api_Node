const express = require('express')
const router = express.Router();
const adminController = require('../controllers/admin')

// /admin/:userId/add-product => POST <상품 등록>
router.post('/:userId/add-product', adminController.postAddProduct)
// /admin/:userId/edit-product/:itemId => PUT <상품 수정>
router.put('/:userId/edit-product/:prodId', adminController.putEditProduct)
// /admin/:userId/delete-product/:prodId => DELETE <상품 삭제>
router.delete("/:userId/delete-product/:prodId", adminController.deleteProduct);

module.exports = router;