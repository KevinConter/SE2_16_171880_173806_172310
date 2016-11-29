/*
	Server
*/
/*************** LIBRERIES **********************/
var util = require('util');
var express = require('express');
var parser = require('body-parser');
var bind = require('bind');
var session = require('express-session');
/************************************************/

/************** initialization ******************/
var app = express();

//set the server PORT
app.set('port',( process.env.PORT || 8848));
//set the server to respond to a file request
app.use('/files',express.static(__dirname+'/web'));
//set Body-parser on the requests
app.use(bodyParser.urlencoded({ extended: false }));
/*************************************************/




app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
