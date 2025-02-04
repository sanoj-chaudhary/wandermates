var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
var { sequelize } = require('./models');
sequelize.authenticate({ logging: false }).then(function (errors) { errors ? console.log(errors) : console.log('Process Database Queries') });
sequelize.sync({ force: false, alter: true, logging: false })
  .then(() => {
    console.log(`Database & tables created!`)
  });
var indexRouter = require('./src/routes/index');
var usersRouter = require('./src/routes/users');
var apiRouter = require('./src/routes/apiRoutes');
var app = express();
const corsOptions = {
  origin: ['http://localhost:8081'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(corsOptions));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter)

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
