const Item = require('../models/product')

exports.getProduct = (req, res, next) => {
  Item.find({}, (err, items) => {
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

exports.getUserProducts = (req, res, next) => {
  const userId = req.params.userId;

  Product.find({ userId: userId }, (err, products) => {
    if (err) return res.json({ message: err });
    return res.status(200).json({ products: products });
  });
};

exports.getProductDetail = (req, res, next) => {
  const prodId = req.params.prodId
  Item.findById(prodId, (err, item) => {
    if (!item) {
      return res.status(500).send({ message: '해당 상품은 삭제되었거나 존재하지 않습니다.' })
    }
    res.status(200).json({
      userId: item.userId,
      title: item.title,
      imageUrl: item.imageUrl,
      description: item.description,
      price: item.price,
    })
  })
}
