const Item = require('../models/product')

exports.getProduct = (req, res, next) => {
  Item.find({}, (err, items) => {
    if (items.length === 0) {
      return res.status(404).send({ message: '해당 상품은 존재하지 않습니다.' })
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

exports.getProductId = (req, res, next) => {
  const prodId = req.params.prodId
  Item.findById(prodId, (err, item) => {
    if (!item) {
      return res.status(500).send({ message: '해당 상품은 삭제되었거나 존재하지 않습니다.' })
    }
    res.status(200).json({
      title: item.title,
      imageUrl: item.imageUrl,
      description: item.description,
      price: item.price,
    })
  })
}
