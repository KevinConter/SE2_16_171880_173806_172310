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
var date = new Date();
var midnight = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59);
var delta = midnight - Date.now();
app.use(session({ secret: 'MySecretPassword',  cookie: {maxAge: delta}}));
/*************************************************/

//Set del server per reindirizzare le richieste fatte alla root
app.get("/",function(request,response){
	//Controlli per verificare se esiste la sessione
	var sess = request.session;
	if(sess.user){
		response.redirect("/files/index.html");
	}else{	//Se non esiste
		response.redirect("/files/logIn.html");
	}
});

//Bind per recuperare index.html
app.get("/files/index.html",function(request,response){
	/*var user={nome:"Nome",cognome:"Cognome"};
	var dati=['asd','asd','asd'];*/
	if(request.session.user){
		var user = request.session.user;
		bind.toFile("tpl/index.tpl",
			{
			user: user
			},
			function(data){
				response.writeHead(200,{"Content-Type":"text/html"});
				response.end(data);
			}
		);
	}else{
		response.redirect("/files/logIn.html");
	}
});

/*app.get("/files/elenco.html",function(request,response){
	bind.toFile("tpl/elenco.tpl",
		{},
		function(data){
			response.writeHead(200,{"Content-Type":"text/html"});
			response.end(data)
		});
});*/

app.get("/files/resoconto.html",function(request,response){
	bind.toFile("tpl/resoconto.tpl",
		{},
		function(data){
			response.writeHead(200,{"Content-Type":"text/html"});
			response.end(data)
		});
});


//per il signin dell'utente
app.post("/SignIn",function(request,response){
	var errore=false;
	var nome = undefined;
	var cognome = undefined;
	var indirizzo = undefined;
	var data = undefined;
	var recapito = undefined;
	var mail = undefined;
	var pwd = undefined;
	
	if(request.body.iNome){
		nome = request.body.iNome;
	}else{
		errore=true;
	}
	
	if(request.body.iCognome){
		cognome = request.body.iCognome;
	}else{
		errore=true;
	}
	
	if(request.body.iIndirizzo){
		indirizzo = request.body.iIndirizzo;
	}else{
		errore=true;
	}
	
	if(request.body.iData){
		data = request.body.iData;
	}else{
		errore=true;
	}
	
	if(request.body.iRecapito){
		recapito = request.body.iRecapito;
	}else{
		errore=true;
	}
	
	if(request.body.iMail){
		mail = request.body.iMail;
	}else{
		errore=true;
	}
	
	if(request.body.iPassword){
		pwd = request.body.iPassword;
	}else{
		errore=true;
	}
	
	if(errore){	
		response.redirect("/");
	}else{
		//console.log("\nnome: "+nome+"\ncognome: "+cognome+"\nindirizzo: "+indirizzo+"\ndata: "+data+"\nrecapito: "+recapito+"\nmail: "+mail+"\npassword: "+pwd);
		var user = new db.User(nome,cognome,indirizzo,new Date(data),recapito,mail,pwd,[]);
		var id = db.addUser(user);
		response.redirect("/");
	}
});


//per la modifica dell'utente
app.post("/EditUser",function(request,response){
	var errore=false;
	var nome = undefined;
	var cognome = undefined;
	var indirizzo = undefined;
	var data = undefined;
	var recapito = undefined;
	var mail = undefined;
	var pwd = undefined;
	var user = request.session.user;
	
	if(request.body.iNome){
		nome = request.body.iNome;
	}else{
		errore=true;
	}
	
	if(request.body.iCognome){
		cognome = request.body.iCognome;
	}else{
		errore=true;
	}
	
	if(request.body.iIndirizzo){
		indirizzo = request.body.iIndirizzo;
	}else{
		errore=true;
	}
	
	if(request.body.iData){
		data = request.body.iData;
	}else{
		errore=true;
	}
	
	if(request.body.iRecapito){
		recapito = request.body.iRecapito;
	}else{
		errore=true;
	}
	
	if(request.body.iMail){
		mail = request.body.iMail;
	}else{
		errore=true;
	}
	
	if(request.body.iPassword){
		pwd = request.body.iPassword;
	}else{
		errore=true;
	}
	
	if(errore){	
		response.redirect("/");
	}else{
		if(user.mail!=mail){
			if(checkMail(mail)){
				user.nome=nome;
				user.cognome=cognome;
				user.data_nascita=data;
				user.mail=mail;
				user.password=pwd;
				user.via=indirizzo;
				user.recapito=recapito;
				
				db.updateUser(user);
				request.session.user=user;
				response.redirect("/");
			}else{
				response.redirect("/files/error.html");
			}
		}else{
			user.nome=nome;
			user.cognome=cognome;
			user.data_nascita=data;
			user.mail=mail;
			user.password=pwd;
			user.via=indirizzo;
			user.recapito=recapito;

			db.updateUser(user);
			request.session.user=user;
			
			response.redirect("/");
		}
	}
});

//per il login dell'utente
app.post("/LogIn",function(request,response){
	var mail = undefined;
	var pwd = undefined;
	if(request.body.iMail){
		mail = request.body.iMail;
	}
	if(request.body.iPassword){
		pwd = request.body.iPassword;
	}
	if(mail != undefined && pwd != undefined){
		var user = db.cercaUtenteMailPassword(mail,pwd);
		request.session.user = user;
	}
	response.redirect("/files/index.html");
});

//per il logout dell'utente
app.get("/LogOut",function(request,response){
	request.session.cookie.maxAge = -1;
	request.session.destroy(function(err) {
		if(err) {
			console.log(err);
		} else {
			response.redirect('/');
		}
	});
});

//Bind per recuperare editUser.html
app.get("/files/editUser.html",function(request,response){
	var sess = request.session;
	if(sess.user){
		var user= db.cercaUtenteId(sess.user.id);
		bind.toFile("tpl/editUser.tpl",
		{
			id: user.id,
			nome: user.nome,
			cognome: user.cognome,
			indirizzo: user.via,
			data: user.data_nascita,
			recapito: user.recapito,
			mail: user.mail,
			password: user.password
		},
		function(data){
			response.writeHead(200,{"Content-Type":"text/html"});
			response.end(data)
		});
	}else{	//Se non esiste
		response.redirect("/files/logIn.html");
	}
});

//Estrazione dell'elenco di piatti da mostrare
//nella pagina apposita
app.post("/GetPiatti",function(request,response){
	if(request.session.user){	//Se l'utente è loggato
		var tipo = undefined;
		var piatti = [];
		if(request.body.iTipo){
			tipo = request.body.iTipo;
			switch(tipo){	//Se è uno dei tipo predefiniti
				case db.PRIMO: 
				case db.SECONDO:
				case db.CONTORNO:
				case db.DESSERT: piatti = db.getPiattiTipo(tipo);
							bind.toFile("tpl/elenco.tpl",
								{piatti: piatti},
								function(data){
									response.writeHead(200,{"Content-Type":"text/html"});
									response.end(data);
								}
							);
							break;
				default: response.redirect("/files/index.html");	//in qualsiasi altro caso
			}
		}
	}else{ //se non è loggato
		response.redirect("/files/logIn.html");
	}
});

//Bind per recuperare error.html
app.get("/files/error.html",function(request,response){
	var sess = request.session;
	if(sess.user){
		var user= db.cercaUtenteId(sess.user.id);
		bind.toFile("tpl/error.tpl",
		{
			messaggio: "L'operazione ha causato un errore, ritenti l'operazione tra qualche minuto. Nel caso che l'errore persista contattare il team"
		},
		function(data){
			response.writeHead(200,{"Content-Type":"text/html"});
			response.end(data)
		});
	}else{	//Se non esiste
		response.redirect("/files/logIn.html");
	}
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
