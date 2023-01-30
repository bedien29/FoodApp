const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const shipperSchema = new Schema({
    id: { type: ObjectId },
    name: { type: String },
    phone: { type: Number }
});

module.exports = mongoose.model('shipper', categorySchema);
