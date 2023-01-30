const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const favoriteSchema = new Schema({
    id: { type: ObjectId },
    product_id: { type: Schema.Types.ObjectId, ref: 'product' },
    user_id: { type: Schema.Types.ObjectId, ref: 'user' },
});

module.exports = mongoose.model('favorite', categorySchema);
