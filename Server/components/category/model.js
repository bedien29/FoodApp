const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const categorySchema = new Schema({
    // id: { type: ObjectId },
    name: {
        type: String,
        // required: [true, 'Tên danh mục không được để trống'],
    },
    description: {
        type: String
    },
    // images: { type: String, default: "" }
});

module.exports = mongoose.model('category', categorySchema);
