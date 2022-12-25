const Item = require('../models/product')

exports.getProduct = (req, res, next) => {
  Item.find({}, (err, items) => {
    if (err) {
      return next(err)
    }
    if (items.length === 0) {
      return res.status(404).send({ message: '상품이 존재하지 않습니다.' })
    }
    const product = items.map((item) => ({
      id: item._id,
      title: item.title,
      imageUrl: item.imageUrl,
      description: item.description,
      price: item.price,
    }))
    res.send(product)
  })
}

exports.getIndex = (req, res, next) => {

}