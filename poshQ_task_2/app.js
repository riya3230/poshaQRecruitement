var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var http = require('http');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

//Engine setup for view
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;// set locals, only providing error in development
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500); // to render the error page
  res.render('error');
});

mongoose.connect('mongodb://localhost:27017/ToDoTask', { useNewUrlParser: true });

module.exports = app;
