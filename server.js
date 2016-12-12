/*
	Server
*/
/*************** LIBRERIE **********************/
var util = require('util');
var express = require('express');
var bodyParser = require('body-parser');
var bind = require('bind');
var session = require('express-session');	// Modulo per la gestione delle sessione
var fs = require("fs");	// Modulo per la gestione del file system del server
var multer = require('multer');		// Modulo per la gestione dei form multipart
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
app.use(session({ secret: 'MySecretPassword',  cookie: {maxAge: 14400000}}));	// Durata dei cookie di sessione: 4 ore
// inizializzazione della destinazione dei file ricevuti dal client
var upload = multer({ dest: __dirname+'/tmp'});
/*************************************************/

//Set del server per reindirizzare le richieste fatte alla root
app.get("/",function(request,response){
	//Controlli per verificare se esiste la sessione
	var sess = request.session;
	if(sess.user){
		if(sess.user == 1)	// Se amministratore
			response.redirect("/files/admin.html");
		else
			response.redirect("/files/index.html");
	}else{	//Se non esiste
		response.redirect("/files/logIn.html");
	}
});

//Bind per recuperare index.html
app.get("/files/index.html",function(request,response){
	var sess = request.session;
	if(sess.user && sess.user !=1){	// Se esiste la sessione e l'utente non è amministratore
		var user = db.cercaUtenteId(sess.user);
		bind.toFile("tpl/index.tpl",
			{user: user},
			function(data){
				response.writeHead(200,{"Content-Type":"text/html"});
				response.end(data);
			}
		);
	}else{
		if(sess.user == 1)
			response.redirect("/files/admin.html");
		else
			response.redirect("/files/logIn.html");
	}
});

//Bind del file final.tpl
app.get("/files/final.html",function(request,response){
	var sess = request.session;
	if(sess.user && sess.user !=1){	// Se esiste la sessione e l'utente non è amministratore
		bind.toFile("tpl/final.tpl",
			{},
			function(data){
				response.writeHead(200,{"Content-Type":"text/html"});
				response.end(data);
			}
		);
	}else{
		if(sess.user == 1)	// Se amministratore
			response.redirect("/files/admin.html");
		else
			response.redirect("/files/logIn.html");
	}
});

//Estrae il piatto selezionato ed esegue il bind del file dettagliPiatto.tpl
app.get("/GetDettagliPiatto",function(request,response){
	var sess = request.session;
	if(sess.user && sess.user !=1){	// Se esiste la sessione e l'utente non è amministratore
		if(request.query.nome){
			var piatto = db.getPiatto(request.query.nome);
			if(piatto!=undefined){	// Se esiste il piatto
				var allergeni = "";
				for(var i=0 ; i<piatto.allergeni.length;i++){
					if(i == piatto.allergeni.length -1)
						allergeni += piatto.allergeni[i];
					else
						allergeni += piatto.allergeni[i]+", ";	
				}
				bind.toFile("tpl/dettagliPiatto.tpl",
					{
						piatto:piatto,
						allergeni:allergeni
					},
					function(data){
						response.writeHead(200,{"Content-Type":"text/html"});
						response.end(data);
					});
			}else{
				bind.toFile("tpl/error.tpl",
				{
					messaggio: "Il piatto richiesto non è stato trovato sul server."
				},
				function(data){
					response.writeHead(404,{"Content-Type":"text/html"});
					response.end(data);
				});
			}
		}else{
			bind.toFile("tpl/error.tpl",
			{
				messaggio: "Non è stato inserito il nome di un piatto da cercare."
			},
			function(data){
				response.writeHead(409,{"Content-Type":"text/html"});
				response.end(data);
			});
		}
	}else{
		if(sess.user == 1)	// Se amministratore
			response.redirect("/files/admin.html");
		else
			response.redirect("/files/logIn.html");
	}
});

//Registrazione di un nuova utente
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
	
	if(!errore){	
		var user = new db.User(nome,cognome,indirizzo,data,recapito,mail,pwd,[]);
		var id = db.addUser(user);
		var data = new Date();
		data.setDate(data.getDate()+4);	// Imposta la data di prenotazione a 4 giorni da oggi
		sess.user = user.id;
		var p = new db.Prenotazione(data.toISOString().substring(0,10),user);	// Crea oggetto della prenotazione
		sess.prenotazione = p;
		sess.user = id;
		response.redirect("/files/index.html");
	}else{
		response.redirect("/files/signIn.html");
	}
});


//Modifica dei dati dell'utente
app.post("/EditUser",function(request,response){
	var sess = request.session;
	if(sess.user){
		var errore=false;
		var nome = undefined;
		var cognome = undefined;
		var indirizzo = undefined;
		var data = undefined;
		var recapito = undefined;
		var mail = undefined;
		var pwd = undefined;
		var allergeni = [];
		var user = db.cercaUtenteId(sess.user);
		
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
		
		if(request.body.iAllergeni || request.body.iAllergeni==""){
			if(request.body.iAllergeni=="")
				allergeni = [];
			else
				allergeni = request.body.iAllergeni.split(", ");
		}else{
			errore=true;
		}
		
		if(errore){	
			response.redirect("/files/editUser.html");
		}else{
			var b = true;
			if(user.mail!=mail){
				b = db.checkMail(mail);
			}
			if(b){
				user.nome=nome;
				user.cognome=cognome;
				user.data_nascita=data;
				user.mail=mail;
				user.password=pwd;
				user.via=indirizzo;
				user.recapito=recapito;
				user.allergeni=allergeni;
				
				db.updateUser(user);
				response.redirect("/files/index.html");
			}else{
				response.redirect("/files/error.html");
			}
		}
	}else{
		response.redirect("/files/logIn.html");
	}
});

//Autenticazione e accesso dell'utente
app.post("/LogIn",function(request,response){
	var sess = request.session;
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
		if(user!=null){	// Se l'utente esiste
			var data = new Date();
			data.setDate(data.getDate()+4);	// Imposta la data di prenotazione a 4 giorni da oggi
			sess.user = user.id;
			var p = new db.Prenotazione(data.toISOString().substring(0,10),user);	// Crea l'oggetto prenotazione
			sess.prenotazione = p;
			if(user.id == 1){	// Se l'utente è ammnistratore
				response.redirect("/files/admin.html");
			}else
				response.redirect("/files/index.html");	
		}else{
			response.redirect("/files/logIn.html");
		}
	}else{
		response.redirect("/files/logIn.html");
	}
});

//per il logout dell'utente
app.get("/LogOut",function(request,response){
	var sess = request.session;
	sess.cookie.maxAge = -1;
	sess.destroy(function(err) {	// Eliminazione della sessione
		if(err) {	// Se si verifica un errore, stampa nel log
			console.log(err);
		} else {
			response.redirect('/files/logIn.html');
		}
	});
});

//Bind per recuperare editUser.html
app.get("/files/editUser.html",function(request,response){
	var sess = request.session;
	if(sess.user){
		var user= db.cercaUtenteId(sess.user);
		var allergeni = "";
		for(var i=0 ; i<user.allergeni.length;i++){
			if(i == user.allergeni.length -1)
				allergeni += user.allergeni[i];
			else
				allergeni += user.allergeni[i]+", ";	
		}
		bind.toFile("tpl/editUser.tpl",
		{
			user: user,
			allergeni: allergeni
		},
		function(data){
			response.writeHead(200,{"Content-Type":"text/html"});
			response.end(data);
		});
	}else{	//Se non esiste
		response.redirect("/files/logIn.html");
	}
});

//Estrazione dell'elenco di piatti da mostrare
//nella pagina apposita
app.post("/GetPiatti",function(request,response){
	var sess = request.session;
	if(sess.user && sess.user !=1){	//Se l'utente è loggato e non p amministratore
		var user= db.cercaUtenteId(sess.user);
		var tipo = undefined;
		var piatti = [];
		if(request.body.iTipo){
			tipo = request.body.iTipo;
			switch(tipo){	//Se è uno dei tipo predefiniti
				case db.PRIMO: 
				case db.SECONDO:
				case db.CONTORNO:
				case db.DESSERT: piatti = db.getPiattiTipo(tipo, user.allergeni);	// Estrazione dell'elenco di piatti
							bind.toFile("tpl/elenco.tpl",
								{piatti: piatti,
								tipo: tipo},
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
		if(sess.user == 1)	// Se ammnistratore
			response.redirect("/files/admin.html");
		else
			response.redirect("/files/logIn.html");
	}
});

//Aggiunge il piatto selezionato alla prenotazione
app.post("/ScegliPiatto",function(request,response){
	var sess = request.session;
	if(sess.user && sess.user !=1){	// Se esistre la sessione e l'utente non è ammnistratore
		var nomePiatto;
		if(request.body.iPiatto){
			nomePiatto = request.body.iPiatto;
			var piatto = db.getPiatto(nomePiatto);
			var prenotazione = db.parsePrenotazione(sess.prenotazione);
			prenotazione.add(piatto);
			sess.prenotazione=prenotazione;
			response.redirect("/files/index.html");
		}else{
			bind.toFile("tpl/error.tpl",
			{
				messaggio: "Non è stato selezionato nessun piatto."
			},
			function(data){
				response.writeHead(409,{"Content-Type":"text/html"});
				response.end(data);
			});
		}
	}else{
		if(sess.user == 1)	// Se ammnistratore
			response.redirect("/files/admin.html");
		else
			response.redirect("/files/logIn.html");
	}
});

//Bind per recuperare il file resoconto.tpl
app.post("/GetResoconto",function(request,response){
	var sess = request.session;
	if(sess.user && sess.user !=1){	// Se esiste la sessione e l'utente non è amministratore
		var piatti = sess.prenotazione.piatti;
		bind.toFile("tpl/resoconto.tpl",
			{
				primo: piatti[0],
				secondo: piatti[1],
				contorno: piatti[2],
				dessert: piatti[3]
			},
			function(data){
				response.writeHead(200,{"Content.Type":"text/html"});
				response.end(data);
			}
		);
	}else{
		if(sess.user == 1)	// Se ammnistratore
			response.redirect("/files/admin.html");
		else
			response.redirect("/files/logIn.html");
	}
});

//Bind per recuperare admin.html
app.get("/files/admin.html",function(request,response){
	var sess = request.session;
	if(sess.user && sess.user==1){	// Se esiste la sessione e l'utente è ammnistratore
		bind.toFile("tpl/admin.tpl",
		{},
		function(data){
			response.writeHead(200,{"Content-Type":"text/html"});
			response.end(data);
		});
	}else{	//Se non esiste
		response.redirect("/");
	}
});

//Aggiunta del piatto cercato dall'admin
app.post("/AddPiatto", upload.single('file'), function(request,response){
	var errore=false;
	var nome = undefined;
	var foto = undefined;
	var tipo = undefined;
	var ingredienti = undefined;
	var allergeni = undefined;
	var curiosita = undefined;
	var sess = request.session;

	if(sess.user && sess.user==1){	//Se essite la sessione e l'utente è ammnistratore
		if(request.body.iNome){
			nome = request.body.iNome;
		}else{
			errore=true;
		}
		
		if(request.file){	// Se è stato inviato un file
			var file = __dirname + '/web/immagini/' + nome+'.img';
			fs.rename(request.file.path, file, function(err) {	// Scrittura del file nel nuovo percorso con il nome specificato
				if (err) {
					errore = true;
				}
			});
			foto = "/files/immagini/"+nome+'.img';	// Percorso che verrà utilizzato per estrarre l'immagine tramite il tag img
		}else{
			foto = '/files/immagini/defaultPiatti.png';
		}
		
		if(request.body.iTipo){
			tipo = parseInt( request.body.iTipo);
			switch(tipo){
				case 1: tipo = db.PRIMO; break; 
				case 2: tipo = db.SECONDO; break;
				case 3: tipo = db.CONTORNO; break;
				case 4: tipo = db.DESSERT; break;
				default : errore = true;
			}
		}else{
			errore=true;
		}
		
		if(request.body.iIngredienti){
			ingredienti = request.body.iIngredienti;
		}else{
			errore=true;
		}
		
		if(request.body.iAllergeni){
			allergeni = request.body.iAllergeni.split(", ");
			
		}else{
			errore=true;
		}
		
		if(request.body.iCuriosita){
			curiosita = request.body.iCuriosita;
		}else{
			errore=true;
		}
	
		if(!errore){	
			var piatto = new db.Piatto(nome,ingredienti,curiosita,foto,allergeni,tipo);	// Creazione del piatto
			db.addPiatto(piatto);	// Aggiunta del piatto all'elenco
			response.redirect("/files/admin.html");
		}else{
			bind.toFile("tpl/admin.tpl",
				{messaggio: "Si è verificato un errore, il piatto non è stato inserito."},
				function(data){
					response.writeHead(409,{"Content-Type":"text/html"});
					response.end(data);
				}
			);
		}
	}else{ //se non è loggato
		response.redirect("/files/logIn.html");
	}
});

//Estrazione del piatto cercato dall'admin
app.post("/GetPiatto",function(request,response){
	var sess = request.session;
	if(sess.user && sess.user==1){	//Se esiste la sessione e l'utente è ammnistratore
		var cerca = undefined;
		if(request.body.iCerca){
			cerca = request.body.iCerca;
			var piatto = db.getPiatto(cerca);
			if(piatto!= undefined){
				var allergeni = "";
				for(var i=0 ; i<piatto.allergeni.length;i++){
					if(i == piatto.allergeni.length -1)
						allergeni += piatto.allergeni[i];
					else
						allergeni += piatto.allergeni[i]+", ";	
				}
				bind.toFile("tpl/piatto.tpl",
				{
					piatto:piatto,
					allergeni:allergeni	
				},
				function(data){
					response.writeHead(200,{"Content-Type":"text/html"});
					response.end(data);
				});
			}else{
				response.redirect("/files/error.html");
			}
		}else{
			bind.toFile("tpl/error.tpl",
			{
				messaggio: "Non è stato inserito alcun piatto da cercare."
			},
			function(data){
				response.writeHead(409,{"Content-Type":"text/html"});
				response.end(data);
			});
		}
	}else{ //se non è loggato
		response.redirect("/files/logIn.html");
	}
});

//Estrazione del piatto cercato dall'admin per eliminarlo
app.post("/EliminaPiatto",function(request,response){
	var sess = request.session;
	if(sess.user && sess.user==1){	//Se l'utente è loggato
		if(request.body.iPiatto){
			var ok = false;
			var foto = __dirname + '/web/immagini/' + request.body.iPiatto +'.img';	// Percorso sul file system in cui è salvato il file
			ok = db.deletePiatto(request.body.iPiatto);	// Cancellazione del piatto dalla lista
			if(ok){
				fs.exists(foto,function(exists){	//Verifica dell'esistenza del file immagine del piatto
					if(exists){
						fs.unlinkSync(foto);	//Cancellazione del file
					}
				});
				response.redirect("/files/admin.html");
			}else{
				response.redirect("/files/error.html");	
			}

		}else{
			bind.toFile("tpl/error.tpl",
			{
				messaggio: "Non è stato inserito alcun piatto da eliminare."
			},
			function(data){
				response.writeHead(409,{"Content-Type":"text/html"});
				response.end(data);
			});
		}
	}else{ //se non è loggato
		response.redirect("/files/logIn.html");
	}
});

//Estrae l'elenco complessivo delle prenotazioni ricevute
// ed esegue il binding del file elencoPrenotazioni.tpl
app.get("/GetElencoPrenotazioni",function(request,response){
	var sess = request.session;
	if(sess.user && sess.user==1){
		var data = new Date();
		data.setDate(data.getDate()+4);	// Imposta la data di prenotazione a 4 giorni da oggi
		var elenco = db.getPrenotazioniGiorno(data.toISOString().substring(0,10));	// Estrazione dell'elenco delle prenotazioni per la data specificata
		bind.toFile("tpl/elencoPrenotazioni.tpl",
			{
				elenco: elenco,
				data: data.toISOString().substring(0,10)
			},
			function(data){
				response.writeHead(200,{"Content-Type":"text/html"});
				response.end(data);
			}
		);
	}else{
		response.redirect("/");
	}
});

//Agiunge la prenotazione dell'utente alla lista ed
// esegue e rimanda l'utente al file final.html
app.get("/Conferma",function(request,response){
	var sess = request.session;
	if(sess.user && sess.user !=1){	// Se esiste la sessione e l'utente non è ammnistratore
		var prenotazione = db.parsePrenotazione(sess.prenotazione);	// Parsing della prenotazione
		db.addPrenotazione(prenotazione);	// Aggiungi prenotazione all'elenco generale
		response.redirect("/files/final.html");
	}else{
		if(sess.user == 1)	// Se ammnistratore
			response.redirect("/files/admin.html");
		else
			response.redirect("/files/logIn.html");
	}
});

// Salva la prenotazione vuota per l'utente e 
// rimanda al file final.html
app.post("/SaltaOrdine",function(request,response){
	var sess = request.session;
	if(sess.user && sess.user !=1){ // Se esiste la sessione e l'utente non è ammnistratore
		var pren = db.parsePrenotazione(sess.prenotazione);	// Parsing della prenotazione
		pren.piatti = [];	// Cancella la prenotazione dell'utente
		db.addPrenotazione(pren);	// Aggiungi prenotazione vuota
		response.redirect("files/final.html");
	}else{
		if(sess.user == 1)	// Se ammnistratore
			response.redirect("/files/admin.html");
		else
			response.redirect("/files/logIn.html");
	}
});

//Bind per recuperare error.html
app.get("/files/error.html",function(request,response){
	var sess = request.session;
	if(sess.user){	// Se esiste la sessione
		bind.toFile("tpl/error.tpl",
		{
			messaggio: "L'operazione ha causato un errore, ritenti l'operazione tra qualche minuto. Nel caso che l'errore persista contattare il team"
		},
		function(data){
			response.writeHead(409,{"Content-Type":"text/html"});
			response.end(data);
		});
	}else{	//Se non esiste
		response.redirect("/files/logIn.html");
	}
});



//Gestione dell'errore 404
function Error404(request,response){
	bind.toFile("tpl/error.tpl",
	{
		messaggio: "404 File non trovato"
	},
	function(data){
		response.writeHead(404,{"Content-Type":"text/html"});
		response.end(data);		
	});
}
app.use(Error404);	// Se non riestra in uno dei casi delle API sopra, manda 404


// Set del server in ascolto sulla porta
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
