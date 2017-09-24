
/**
 * Module dependencies.
 */

var express = require('express');
var ip = require('ip');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();
var router = require('./routes/router.js');

app.use('/',router);

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));exports.login = function(req, res){
  res.render('login.jade');
};
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

require('./routes/router.js')

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//app.get('/', routes.router);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
