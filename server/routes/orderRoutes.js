const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const { addOrderItems } = require('../controllers/orderController');

const router = express.Router();

router.post('/', protect, addOrderItems);

module.exports = router;
