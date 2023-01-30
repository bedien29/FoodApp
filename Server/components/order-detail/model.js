const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const orderDetailSchema = new Schema({
    id: { type: ObjectId },
    product_id: { type: Schema.Types.ObjectId, ref: 'product' },
    order_id: { type: Schema.Types.ObjectId, ref: 'order' },
    price: { type: Number },
    quantity: { type: Number },
    discount: { type: String }
});

module.exports = mongoose.model('order-detail', categorySchema);
