
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.render('index.jade');
});

app.get('/login', function(req,res) {
    res.render('login.jade');
});

module.exports = app;

