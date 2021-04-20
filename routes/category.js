const express = require('express');
const categoryController = require('../controllers/category');
const routes = express.Router();

routes.get('/', categoryController.index);
routes.post('/', categoryController.store);

module.exports = routes;