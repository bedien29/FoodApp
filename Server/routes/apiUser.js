const userController = require('../components/users/controller');
const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');

//middleware
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');
const sendToken = require('../utils/jwtToken');

//Login User
router.post('/login', async function (req, res, next) {
    try {
        const { email, password } = req.body;
        const user = await userController.login(email, password);
        if (!user) {
            return res.status(400).json({
                message: 'Mật khẩu không đúng'
            });
        }
        //hashpassword
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message: 'Mật khẩu không đúng'
            });
        }
        sendToken(user, 200, res);

        // res.status(200).json({
        //     success: true,
        //     user
        // });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

//Register User
router.post('/register', async function (req, res, next) {
    const { body } = req;
    const result = await userController.register(body);
    if (result) {
        res.status(200).json({ status: true });
    } else {
        res.status(400).json({ status: false });
    }
});



//Logout User
// router.get('/logout', userController.logout);

//Update profile
// router.put('/update/info', isAuthenticatedUser, userController.updateProfile);

//Get user Details
router.get('/me', isAuthenticatedUser, userController.getUserDetails);


module.exports = router;