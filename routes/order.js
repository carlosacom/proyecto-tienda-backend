const express = require('express');
const orderController = require('../controllers/order');
const routes = express.Router();

routes.post('/', orderController.store);
module.exports = routes