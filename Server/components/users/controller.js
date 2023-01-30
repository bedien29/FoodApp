// tầng giao tiếp xử lý data
const userService = require('./service');
const bcrypt = require('bcryptjs');
const sendToken = require('../../utils/jwtToken');

//Register user
exports.register = async (body) => {
    // try {
    //     const { email, password, name, phone, avatarImage, role } = req.body;

    //     const passwordHash = await bcrypt.hash(password, 10);

    //     const user = await userService.register({
    //         email,
    //         password: passwordHash,
    //         name, phone,
    //         avatarImage,
    //         role
    //     });
    //     sendToken(user, 201, res);
    // } catch (error) {
    //     res.status(400).json({
    //         message: error.message
    //     });
    // }

    body.password = await bcrypt.hash(body.password, 10);
    user = await userService.register(body);
    return user;
}

//Login user
exports.login = async (email, password) => {
    const user = await userService.login(email);
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword){
        return null;
    }
    return user;
}

//get user details
exports.getUserDetails = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const user = await userService.getUserDetails(userId);
        res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}