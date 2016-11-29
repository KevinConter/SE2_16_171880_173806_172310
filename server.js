/*
	Server
*/

var util = require('util');
var express = require('express');
var parser = require('body-parser');
var bind = require('bind');

var app = express();

app.set('port',( process.env.PORT || 8848));
app.use('/files',express.static(__dirname+'/web'));


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
