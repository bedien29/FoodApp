const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const productSchema = new Schema({
    // id: { type: ObjectId },
    name: {
        type: String,
        // required: true
    },
    price: {
        type: Number,
        // required: true
    },
    quantity: {
        type: Number
    },
    // image:[
    //     {
    //         public_id: {
    //             type: String,
    //             required: true
    //         },
    //         url: {
    //             type: String,
    //             required: true
    //         }
    //     }
    // ],
    image: { type: String},

    description: {
        type: String
    },
    category_id: {
        type: Schema.Types.ObjectId,
        ref: "category"
    },
});

module.exports = mongoose.model("product", productSchema);
