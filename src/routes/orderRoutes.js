const express = require('express');
const auth = require('../middlewares/auth');

const orderRouter = express.Router();

const {
    addOrder,
    getOrders,
    updateOrder,
    removeOrder,
    reportOrder,
    changeOrderStatus,
    getPendingOrders,
} = require('../controllers/orderController');

try {
    orderRouter.post('/add', auth.authfunc(['user']), addOrder);
    orderRouter.get('/', auth.authfunc(['superadmin', 'admin']), getOrders); // get orders
    orderRouter.get('/:data', auth.authfunc(['superadmin', 'admin', 'user']), getOrders); // get order by user ID
    orderRouter.get('/pending', auth.authfunc(['superadmin', 'admin']), getPendingOrders); // get order by user ID
    orderRouter.patch('/update/:id', auth.authfunc(['user']), updateOrder);
    orderRouter.delete('/remove/:id', auth.authfunc(['admin']), removeOrder);
    orderRouter.patch('/status/:id', auth.authfunc(['admin']), changeOrderStatus);
    orderRouter.get('/report/:date', auth.authfunc(['superadmin']), reportOrder);
} catch (error) {
    console.log(error);
}

module.exports = orderRouter;
