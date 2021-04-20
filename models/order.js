const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    created_at: { type: Number, required: true },
    valid: { type: Boolean, default: false }
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;