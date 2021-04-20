const express = require('express');
const productCategoryController = require('../controllers/product_category');
const routes = express.Router();

routes.post('/', productCategoryController.store);
module.exports = routes