const Item = require('../models/itemModel')

module.exports.postItem = (req, res, next) => {
  const item = new Item(req.body)

  item.save((err) => {
    if (err) return res.json({ messgae: err })
    return res.status(200).json({ title: item.title, price: item.price })
  })
}

module.exports.getItems = (req, res, next) => {
  Item.find({}, (err, items) => {
    if (err) {
      return next(err);
    }
    const allItems = items.map(item => ({ title: item.title, price: item.price }));
    res.send(allItems);
  })
}
