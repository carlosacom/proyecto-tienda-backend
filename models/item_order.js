const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemOrderSchema = new Schema({
    order: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    amount: { type: Number, required: true }
});

const ItemOrder = mongoose.model('ItemOrder', ItemOrderSchema, 'item_orders');
module.exports = ItemOrder;