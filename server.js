/*
	Server
*/
/*************** LIBRERIE **********************/
var util = require('util');
var express = require('express');
var bodyParser = require('body-parser');
var bind = require('bind');
var session = require('express-session');
var db = require('./moduli/db.js');
/************************************************/

/************** INIZIALIZZAZIONE ******************/
var app = express();

//set della PORT del server
app.set('port',( process.env.PORT || 8848));
//set il server per rispondere a richieste di file
app.use('/files',express.static(__dirname+'/web'));
//applica body-parser alle richieste
app.use(bodyParser.urlencoded({ extended: false }));
//inizializzazione delle sessioni
app.use(session({secret: "MySecretPassword"}));
/*************************************************/

//Set del server per reindirizzare le richieste fatte alla root
app.get("/",function(request,response){
	//Controlli per verificare se esiste la sessione
	//Se non esiste
	response.redirect("/files/index.html");
});

//Bind per recuperare index.html
app.get("/files/index.html",function(request,response){
	var user={nome:"Nome",cognome:"Cognome"};
	var dati=['asd','asd','asd'];
	bind.toFile("tpl/index.tpl",
		{
		user: user,
		piatti:dati
		},
		function(data){
			response.writeHead(200,{"Content-Type":"text/html"});
			response.end(data);
		}
	);
});




app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
