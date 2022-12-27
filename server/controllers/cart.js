const Cart = require('../models/cart')

exports.getCart = (req, res, next) => {
  const userId = req.params.userId
  Cart.findOne({ userId: userId }, (err, cart) => {
    if (err) {
      return res.status(500).send({ message: err })
    }
    if (!cart || cart.items.length === 0) {
      return res.status(404).send({ message: '장바구니가 비어있습니다.' })
    }
    const cartList = cart.items.map((item) => ({
      id: item.prodId,
      title: item.title,
      imageUrl: item.imageUrl,
      price: item.price,
      quantity: item.quantity,
    }))
    res.send(cartList)
  })
}

exports.addCart = (req, res, next) => {
  const userId = req.params.userId
  const prodId = req.params.prodId
  const item = {
    id: prodId,
    title: req.body.title,
    imageUrl: req.body.imageUrl,
    price: +req.body.price,
    quantity: +req.body.quantity,
    totalPrice: +req.body.totalPrice,
  }
  Cart.findOne({ userId: userId }, (err, cart) => {
    if (err) {
      return res.status(500).send({ message: err })
    }

    if (!cart) {
      // 장바구니 목록에 상품 ID가 없을 경우 새로 추가하기
      const newCart = new Cart({
        userId: userId,
        items: [item],
      })
      newCart.save((err, savedCart) => {
        if (err) {
          return res.status(500).send({ message: err })
        }
        return res.status(200).send(savedCart)
      })
    } else {
      // 해당 상품이 카트에 이미 있는지 확인
      let itemIndex = -1
      for (let i = 0; i < cart.items.length; i++) {
        if (cart.items[i].id === prodId) {
          itemIndex = i
          break
        }
      }
      if (itemIndex === -1) {
        // 장바구니에 상품이 없으면 추가
        cart.items.push(item)
      } else {
        // 장바구니에 상품이 이미 있는 경우 가격 및 수량을 업데이트
        cart.items[itemIndex].price = item.price
        cart.items[itemIndex].quantity = item.quantity
      }
      // 장바구니 업데이트 및 저장
      cart.save((err, savedCart) => {
        if (err) {
          return res.status(500).send({ message: err })
        }
        return res.status(200).send(savedCart)
      })
    }
  })
}

exports.deleteCart = (req, res, next) => {
  const userId = req.params.userId
  const prodId = req.params.prodId
  Cart.findOne({ userId: userId }, (err, cart) => {
    if (err) return res.status(500).send({ message: err })
    const itemIndex = cart.items.findIndex((item) => item.id === prodId)
    cart.items.splice(itemIndex, 1)
    cart.save((err) => {
      if (err) return res.json({ message: err })
      return res
        .status(200)
        .json({ message: '장바구니 목록에서 삭제되었습니다.' })
    })
  })
}
