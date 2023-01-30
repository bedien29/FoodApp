const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const paySchema = new Schema({
    id: { type: ObjectId },
    momo: { type: String },
    zaloPay: { type: String },
    banking: { type: String },
});

module.exports = mongoose.model('pay', categorySchema);
