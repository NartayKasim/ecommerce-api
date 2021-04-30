const products = require('../products.json')

const getProducts = (req, res) => {
    if (req.query.price) {
        const items = products.filter(val => val.price >= parseInt(req.query.price))

        items.length > 0 
        ? 
        res.status(200).send(items) 
        : 
        res.status(200).send(products)
    }
}

module.exports = getProducts