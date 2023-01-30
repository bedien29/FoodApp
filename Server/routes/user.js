const { response } = require('express');
var express = require('express');
var router = express.Router();
const userController = require('../components/users/controller');
const upload = require('../middle/capNhat');
const jwt = require('jsonwebtoken');

router.get('/login', function (req, res, next) {
    res.render('login', {});
});

router.get('/register', function (req, res, next) {
    res.render('register', {});
});

router.post("/login", async function (req, res, next) {
    try {
        const { email, password } = req.body;
        let user = await userController.login(email, password);
        if (user) {
            const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET_KEY);
            res.cookie('token', token, { expiresIn: '1d' });
            res.redirect('/products/products-list');
            //so sánh token với token trong cookie
            if (token == req.cookies.token) {
                res.redirect('/products/products-list');
            }
        } else {
            res.redirect("/login");
        }
    } catch (err) {
        res.redirect("/login");
    }
});

router.get("/checkRole/:id", async function (req, res, next) {
    const { id } = req.params;
    let role = await userController.checkRole(id);
    res.json(role);
});

router.post("/register", upload.single('image'), async function (req, res, next) {
    let { body, file } = req;
    let avatarImage = '';
    if (file) {
        avatarImage = `http://192.168.0.15/images/${file.filename}`;
    }
    body = { ...body, avatarImage: avatarImage }
    const user = await userController.register(body, body.email);
    if (user) {
        res.json("Thanh cong");
    } else {
        res.json("Khong thanh cong");
    }
});

router.get('/logout', function (req, res, next) {
    req.session.destroy(function (err) {
        // nếu đăng xuất thành công chuyển qua đăng nhập
        res.redirect('login');
    })
});

module.exports = router;
