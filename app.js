const express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');

const app = express();


// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// cors
app.use(cors ({ origin:true, credentials:true }));

// cargar rutas 
const productRoutes = require('./routes/product');
const categoryRoutes = require('./routes/category');
const orderRoutes = require('./routes/order');
const productCategoryRoutes = require('./routes/product_category');

// rutas 
app.use('/product', productRoutes);
app.use('/category', categoryRoutes);
app.use('/order', orderRoutes);
app.use('/product-category', productCategoryRoutes);

module.exports = app;