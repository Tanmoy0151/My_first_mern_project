const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const { createProduct } = require('../controllers/productController');

const router = express.Router();

router.post('/', protect, createProduct);

module.exports = router;
