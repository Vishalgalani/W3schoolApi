var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config()



var usersRouter = require('./routes/users');
var mainRouter = require('./routes/main');
var addminRouter = require('./routes/user');
var subRouter = require('./routes/sub');
var topicRouter = require('./routes/topic');
const mongoose = require('mongoose');
const { error } = require('console');

mongoose.connect(process.env.MongoUrl)
  .then(() => console.log('Connected!'))
  .catch((err) =>{
    console.log(error.message);
  })

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/main', mainRouter);
app.use('/addmin', addminRouter);
app.use('/sub', subRouter);
app.use('/topic', topicRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
