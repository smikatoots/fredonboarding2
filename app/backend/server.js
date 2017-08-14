var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../../webpack.config');

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var mongoose = require('mongoose');
var ReactDOMServer = require('react-dom/server');
var server = express();

mongoose.Promise = global.Promise
var Models = require('./models')
var MongoStore = require('connect-mongo')(session)
var Document = Models.Document;
var User = Models.User;
var connect = process.env.MONGODB_URI
new WebpackDevServer(webpack(config), {
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
}).listen(3000, 'localhost', function (err) {
    if (err) {
        console.log(err);
    }

  console.log('Listening at localhost:3000');
});

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cookieParser());
server.use(session({
  secret: 'keyboard cat',
  store: new MongoStore({mongooseConnection: mongoose.connection})
}));
mongoose.connect(connect);

server.use(express.static(path.join(__dirname, 'public')));

server.post('/form1', function(req, res) {
    console.log('received from front-end', req.body.data);
    res.json('indeed. received from server!')
})

// var server = require('http').Server(app);

server.listen(3000, function () {
  console.log('Backend server for Electron App running on port 3000!')
})

module.exports = server;
