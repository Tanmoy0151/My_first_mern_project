const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const { addOrderItems, getOrderById, updateOrderToPaid, updateOrderToDelivered, getOrderSummary } = require('../controllers/orderController');

const router = express.Router();

router.post('/', protect, addOrderItems);
router.get('/:id', protect, getOrderById);
router.put('/:id/pay', protect, updateOrderToPaid);
router.put('/:id/deliver', protect, updateOrderToDelivered);
router.get('/summary', protect, getOrderSummary);

module.exports = router;
