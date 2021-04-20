const express = require('express');
const productController = require('../controllers/product');

const routes = express.Router();

routes.post('/', productController.store);

module.exports = routes;
