const express = require('express')
const router = express.Router();
const cartController = require('../controllers/cart')

router.get('/:userId', cartController.getCart)
router.post('/:userId/:prodId', cartController.addCart)

module.exports = router;