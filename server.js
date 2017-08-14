var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
// var LocalStrategy = require('passport-local');
var mongoose = require('mongoose');
var ReactDOMServer = require('react-dom/server');
var app = express();

mongoose.Promise = global.Promise
var Models = require('./app/backend/models')
var MongoStore = require('connect-mongo')(session)
var User = Models.User;
var connect = process.env.MONGODB_URI
var expressValidator = require('express-validator')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(expressValidator());
const port = 3000;

const compiler = webpack(config);
const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    // It suppress error shown in console, so it has to be set to false.
    quiet: false,
    // It suppress everything except error, so it has to be set to false as well
    // to see success build.
    noInfo: false,
    stats: {
      // Config for minimal console.log mess.
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false
}
});

app.use(middleware);
app.use(webpackHotMiddleware(compiler));
app.use(express.static(__dirname + '/dist'));

app.use(session({
  secret: 'keyboard cat',
  store: new MongoStore({mongooseConnection: mongoose.connection})
}));
mongoose.connect(connect);

app.post('/form1', function(req, res) {
    var data = req.body.data;
    var newUser = new User({
        lastName: data.lastName,
        firstName: data.firstName,
        middleName: data.middleName,
        gender: data.gender,
        tin: data.tin,
        countryOfBirth: data.countryOfBirth,
        countryOfResidence: data.countryOfResidence,
        countryOfCitizenship: data.countryOfCitizenship,
        telephoneNumber: data.telephoneNumber,
        mobileNumber: data.mobileNumber,
        email: data.email,
        civilStatus: data.civilStatus,
    }).save((user) => {
        console.log("User successfully saved.");
        return user
    })
    .then((returnedUser) => {
        res.json(returnedUser)
    })
})

app.post('/print', function(req, res) {
    var tempId = "59912f01c922c78bff0a9a54";
    User.findById(tempId, (err, user) => {
        if (err) {
          console.log('Error in finding document', tempId)
        }
        else {
          console.log('Document found', tempId, user);
          res.json(user);
        }
    })
})

app.listen(port, 'localhost', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.log('==> 🌎 Listening on port localhost:3000', port);
});


// var server = new WebpackDevServer(webpack(config), {
//     publicPath: config.output.publicPath,
//     hot: true,
//     historyApiFallback: true,
//     // It suppress error shown in console, so it has to be set to false.
//     quiet: false,
//     // It suppress everything except error, so it has to be set to false as well
//     // to see success build.
//     noInfo: false,
//     stats: {
//       // Config for minimal console.log mess.
//       assets: false,
//       colors: true,
//       version: false,
//       hash: false,
//       timings: false,
//       chunks: false,
//       chunkModules: false
//     }
//
//     app.use(session({
//       secret: 'keyboard cat',
//       store: new MongoStore({mongooseConnection: mongoose.connection})
//     }));
//     mongoose.connect(connect);
//     app.use(express.static(path.join(__dirname, 'public')));
//
//     app.post('/form1', function(req, res) {
//         console.log('received from front-end', req.body.data);
//         res.json('indeed. received from server!')
//     })
//
// }).listen(3000, 'localhost', function (err) {
//     if (err) {
//         console.log(err);
//     }
//
//   console.log('Listening at localhost:3000');
// });





module.exports = app;
