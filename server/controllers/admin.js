const Item = require('../models/product')

exports.postAddProduct = (req, res, next) => {
  const item = new Item(req.body)
  item.save((err) => {
    if (err) return res.json({ messgae: err })
    res.status(200).json({
      title: item.title,
      imageUrl: item.imageUrl,
      description: item.description,
      price: item.price,
    })
  })
}

exports.putEditProduct = (req, res, next) => {
  const prodId = req.params.prodId
  const updatedItem = req.body
  Item.findById(prodId, (err, item) => {
    if (!item) return res.json({ messgae: '해당 상품은 존재하지 않습니다.' })
    item.title = updatedItem.title
    item.imageUrl = updatedItem.imageUrl
    item.description = updatedItem.description
    item.price = updatedItem.price
    item.save((err) => {
      if (err) return res.json({ messgae: err })
      res.status(200).json({
        title: item.title,
        imageUrl: item.imageUrl,
        description: item.description,
        price: item.price,
      })
    })
  })
}

exports.deleteProduct = (req, res, next) => {
  const prodId = req.params.prodId

  Item.findByIdAndDelete(prodId, (err, item) => {
    if (!item)
      return res.json({
        message: '이미 삭제되었거나 존재하지 않는 상품입니다.',
      })
    if (err) return res.json({ message: err })
    res.status(200).json({ message: '상품이 삭제되었습니다' })
  })
}
