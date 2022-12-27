const express = require('express')
const router = express.Router();
const cartController = require('../controllers/cart')

// /cart/:userId => GET <장바구니 목록 불러오기>
router.get('/:userId', cartController.getCart)
// /cart/:userId/:prodId => POST <장바구니에 상품 추가하기>
router.post('/:userId/:prodId', cartController.addCart)
// /cart/:userId/:prodId => DELETE <장바구니에서 상품 삭제하기>
router.delete('/:userId/:prodId', cartController.deleteCart)

module.exports = router;