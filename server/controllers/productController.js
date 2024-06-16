const Product = require('../models/productModel');

const createProduct = async (req, res) => {
    const { name, price, description, image } = req.body;

    const product = new Product({
        name,
        price,
        description,
        image,
        seller: req.user._id,
    });

    try {
        const createdProduct = await product.save();
        res.status(201).json(createdProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { createProduct };
