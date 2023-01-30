const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
// const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    // id: { type: ObjectId },
    email: {
        type: String,

        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        default: "",
    },
    avatarImage: {
        type: String,
        default: ""
    },
    role: {
        type: String,
        default: "user"
    },

});

//jwt token
userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id, role: this.role }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES_TIME//set 1day
    });
};

module.exports = mongoose.model("user", userSchema);
