/*
	Server
*/
/*************** LIBRERIES **********************/
var util = require('util');
var express = require('express');
var bodyParser = require('body-parser');
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

//Set the server to redirect a root request
app.get("/",function(request,response){
	//Controlli per verificare se esiste la sessione
	//Se non esiste
	response.redirect("/files/index.html");
});

app.get("/files/index.html",function(request,response){
	var user={nome:"Asd",cognome:"qwery"};
	bind.toFile("tpl/index.tpl",
		{user: user.nome},
		function(data){
			response.writeHead(200,{"Content-Type":"text/html"});
			response.end(data);
		}
	);
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
