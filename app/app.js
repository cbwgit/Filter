var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next)=> {
    res.header('Access-Control-Allow-Origin', "*")
    res.header('Access-Control-Allow-Credentials', false)
    next()
})

const mongoose = require("mongoose")
mongoose.connect(process.env.DATABASE_URL, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection // 給一個變數 在連DB @的時候用的
db.

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
