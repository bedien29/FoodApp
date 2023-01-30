const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const orderSchema = new Schema({
    id: { type: ObjectId },
    address_id: { type: Schema.Types.ObjectId, ref: 'address' },
    shipper_id: { type: Schema.Types.ObjectId, ref: 'shipper' },
    pay_id: { type: Schema.Types.ObjectId, ref: 'pay' },
    status: { type: String, default: "" },
    orderDate: { type: Date }
});

module.exports = mongoose.model('order', categorySchema);
