const Item = require('../models/itemModel')

module.exports.postItem = (req, res, next) => {
  const item = new Item(req.body)

  item.save((err) => {
    if (err) return res.json({ messgae: err })
    return res.status(200).json({ title: item.title, price: item.price })
  })
}

module.exports.postFindItem = (req, res, next) => {
  const query = { title: req.body.title }
  Item.find(query, (err, items) => {
    if (err) {
      return next(err)
    }
    if (items.length === 0) {
      return res
        .status(404)
        .send({ message: '해당 내용의 상품이 존재하지 않습니다.' })
    }
    const findItems = items.map((item) => ({
      title: item.title,
      price: item.price,
    }))
    res.send(findItems)
  })
}

module.exports.getItems = (req, res, next) => {
  Item.find({}, (err, items) => {
    if (err) {
      return next(err)
    }
    const allItems = items.map((item) => ({
      title: item.title,
      price: item.price,
    }))
    res.send(allItems)
  })
}
