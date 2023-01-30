// tầng giao tiếp với database
const userModel = require('./model');

exports.register = async (userBody) => {
    const user = await userModel.findOne({ email: userBody.email })
    if (user){
        throw new Error('Email đã tồn tại');
    }
    return await userModel.create(userBody);
}

exports.login = async (email) => {
    const user = await userModel.findOne({ email: email });
    // if (!user) {
    //     throw new Error('Email không tồn tại');
    // }
    return user;
}

//update profile
exports.updateProfile = async (userId, userBody) => {
    return await userModel.findByIdAndUpdate( userId, userBody, { new: true} );
}

//get user details
exports.getUserDetails = async (userId) => {
    return await userModel.findById(userId);
}