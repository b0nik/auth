global.api={};
api.express = require('express');
api.path = require('path');
api.logger = require('morgan');
api.cookieParser = require('cookie-parser');
api.bodyParser = require('body-parser');
api.session = require('express-session');
api.passport=require('passport');
api.fs=require('fs');
api.flash   = require('req-flash');

var routes = require('./routes/index');

var app = api.express();

// view engine setup
app.set('views', api.path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(api.logger('dev'));
app.use(api.bodyParser.json());
app.use(api.bodyParser.urlencoded({ extended: false }));
app.use(api.cookieParser());
app.use(api.express.static(api.path.join(__dirname, 'public')));
app.use(api.session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));
app.use(api.flash());
app.use(api.passport.initialize());
app.use(api.passport.session());




app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.end(err.message);
    //res.render('error', {
    //  message: err.message,
    //  error: err
    //});
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.end(err.message);
  //res.render('error', {
  //  message: err.message,
  //  error: {}
  //});
});

module.exports = app;
