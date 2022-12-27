const Item = require('../models/product')

exports.postAddProduct = (req, res, next) => {
  const userId = req.params.userId
  const item = new Item({ ...req.body, userId: userId })
  item.save((err) => {
    if (err) return res.json({ messgae: err })
    res.status(200).json({
      message: '상품이 등록되었습니다.',
    })
  })
}

exports.putEditProduct = (req, res, next) => {
  const prodId = req.params.prodId
  const userId = req.params.userId
  const updatedItem = req.body

  Item.findOne({ _id: prodId, userId: userId }, (err, item) => {
    if (err) return res.json({ messgae: err })
    item.title = updatedItem.title
    item.imageUrl = updatedItem.imageUrl
    item.description = updatedItem.description
    item.price = updatedItem.price
    item.save((err) => {
      if (err) return res.json({ messgae: err })
      res.status(200).json({
        message: '상품 내용이 정상적으로 수정되었습니다.',
      })
    })
  })
}

exports.deleteProduct = (req, res, next) => {
  const prodId = req.params.prodId;
  const userId = req.params.userId

  Item.findOneAndDelete({ _id: prodId, userId: userId }, (err, item) => {
    if (!item)
      return res.json({
        message: '이미 삭제되었거나 존재하지 않는 상품입니다.',
      });
    if (err) return res.json({ message: err });
    res.status(200).json({ message: '상품이 삭제되었습니다' });
  });
};
