const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const commentSchema = new Schema({
    id: { type: ObjectId },
    product_id: { type: Schema.Types.ObjectId, ref: 'product' },
    user_id: { type: Schema.Types.ObjectId, ref: 'user' },
    order_id: { type: Schema.Types.ObjectId, ref: 'order' },
    comment: { type: String },
    date: { type: Date }
});

module.exports = mongoose.model('comment', categorySchema);
