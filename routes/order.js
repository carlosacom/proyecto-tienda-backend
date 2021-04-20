const express = require('express');
const orderController = require('../controllers/order');
const routes = express.Router();

routes.post('/', orderController.store);
routes.put('/confirmation/:order', orderController.confirmation);
module.exports = routes