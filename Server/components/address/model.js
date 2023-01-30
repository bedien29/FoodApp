const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const addressSchema = new Schema({
    id: { type: ObjectId },
    user_id: { type: Schema.Types.ObjectId, ref: 'user' },
    name: { type: String },
    address: { type: String },
    phone: { type: Number },
});

module.exports = mongoose.model('address', categorySchema);
