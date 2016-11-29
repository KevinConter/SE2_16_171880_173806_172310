/*
	Server
*/

var util = require('util');
var express = require('express');
var parser = require('body-parser');
var bind = require('bind');

var app = express();

app.set('port',( process.env.PORT || 8848));


app.listen('8848','127.0.0.1');
console.log('Server running at http://127.0.0.1:8848');
