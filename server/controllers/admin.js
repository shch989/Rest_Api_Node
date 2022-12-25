const Item = require('../models/product')

exports.postAddProduct = (req, res, next) => {
  const item = new Item(req.body)
  item.save((err) => {
    if (err) return res.json({ messgae: err })
    return res
      .status(200)
      .json({
        title: item.title,
        imageUrl: item.imageUrl,
        description: item.description,
        price: item.price,
      })
  })
}
