const { redirect } = require('express/lib/response');
const jwt = require('jsonwebtoken');


//check login sử dụng cho web
exports.checkLogin = function(request, response, next) {
    const token = request.cookies.token;
    const url = request.originalUrl.toLowerCase();
    if (!token) {
        return response.redirect('/login');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        request.user = decoded;
        next();
    } catch (error) {
        return response.redirect('/login');
    }
}

//check role sử dụng cho web
exports.checkRole = function(role) {
    return function(req, res, next) {
        if (role != req.user.role) {//role là nhập vào để so sánh với role trong token là req.user.role
            return res.redirect('/login');
        }
        next();
    }
}
