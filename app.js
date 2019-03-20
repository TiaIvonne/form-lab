var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose=require('mongoose')
const bodyParser = require('body-parser')
const cors =require('cors')
const session =require('express-session')
const MongoStore=require('connect-mongo')(session);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//connect with database
mongoose.connect('mongodb://localhost/formlab', { useNewUrlParser: true }, function(err) {
    if(err) console.log("ERROR")
    else console.log("connected")
})
debugger
var app = express();
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))

app.use(session({
  secret:             'secret',
  resave:             true,
  saveUninitialized:  true,
  cookie:             {
          maxAge: 1000 * 60 *60 *24 *7
  },
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 24 * 60 * 60 // 1 day
  })
}))



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', usersRouter);



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
