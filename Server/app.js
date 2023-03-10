// import library
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// require('dotenv/config')


const session = require('express-session');
const mongoose = require('mongoose');
require('./components/users/model');

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
      path: "config/.env"
  })
}


//routes
var userRouter = require('./routes/apiUser');
var productRouter = require('./routes/apiProduct');
var categoryRouter = require('./routes/apiCategory');

var products = require('./routes/product');
var category = require('./routes/category');
var user = require('./routes/user');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'iloveyou',
  resave: true,
  saveUninitialized: true,
  cookie: {secure: false}
}))

mongoose.connect(process.env.MONGOOSE_CONNECTION, { useNewUrlParser: true }, () => console.log("Connect to db"));


app.listen(3000, () => console.log("Server is running"));

//routes
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/category', categoryRouter);

app.use('/san-pham', products);
app.use('/san-pham', category);
app.use('/user', user);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
