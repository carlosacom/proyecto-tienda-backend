const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductCategorySchema = new Schema({
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
});

const ProductCategory = mongoose.model('ProductCategory', ProductCategorySchema, 'product_categories');
module.exports = ProductCategory