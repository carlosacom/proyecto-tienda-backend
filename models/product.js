const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: { type: String, require: true, trim: true },
    description: { type: String, require: true, trim: true },
    barcode: { type: String, require: true, trim: true },
    price: { type: Number, require: true },
    created_at: Number,
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;