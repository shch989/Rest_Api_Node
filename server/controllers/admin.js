const Item = require('../models/product')

exports.postAddProduct = (req, res, next) => {
  const item = new Item(req.body)
  item.save((err) => {
    if (err) return res.json({ messgae: err })
    return res.status(200).json({
      title: item.title,
      imageUrl: item.imageUrl,
      description: item.description,
      price: item.price,
    })
  })
}

exports.putEditProduct = (req, res, next) => {
  const itemId = req.params.itemId
  const updatedItem = req.body
  Item.findById(itemId, (err, item) => {
    if (err) return res.json({ messgae: err })
    item.title = updatedItem.title
    item.imageUrl = updatedItem.imageUrl
    item.description = updatedItem.description
    item.price = updatedItem.price
    item.save((err) => {
      if (err) return res.json({ messgae: err })
      return res.status(200).json({
        title: item.title,
        imageUrl: item.imageUrl,
        description: item.description,
        price: item.price,
      })
    })
  })
}

exports.deleteProduct = (req, res, next) => {
  const itemId = req.params.itemId;
  Item.findByIdAndDelete(itemId, (err) => {
    if (err) return res.json({ message: err });
    return res.status(200).json({ message: "상품이 삭제되었습니다" });
  });
};
