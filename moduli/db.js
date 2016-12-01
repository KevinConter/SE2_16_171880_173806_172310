var users = [];
var piatti = [];

/**************************
 * Gestione degli utenti  *
 **************************/

/**
  *	Costruttore di un utente
  * @param {String} nome il nome della persona
  * @param {String} cognome il comgnome della persona
  * @param {String} via l'indirizzo della persona
  * @param {Date} data la data di nascita della persona
  * @param {String|Array[String]} recapito un recapito oppure una lista di recapiti
  * @param {String} mail l'e-mail con cui si è registrata la persona
  * @param {String} password la password di log-in dell'utente
  * @param {Array[String]} allergeni una lista di allergeni. Può essere omessa
*/
var User = function(nome,cognome,via,data,recapito,mail,password,allergeni){
	if(typeof nome != 'string' || 
		typeof cognome != 'string' || 
		typeof via != 'string' || 
		! (data instanceof Date) || 
		!(typeof recapito == 'string' || (recapito instanceof Array)) || 
		typeof mail != 'string' || 
		typeof password != 'string' || 
		!(allergeni instanceof Array)){
			return null;
	}
	this.nome = nome;
	this.cognome = cognome;
	this.data_nascita = data;
	this.mail=mail;
	this.password = password;
	this.via = via;
	this.recapito = recapito;
	this.allergeni = allergeni;

	this.toString = function(){
		return 'nome: '+this.nome+'\n' +
			'cognome: '+this.cognome+'\n'+
			'nato il: '+this.data+'\n'+
			'E-mail: '+this.mail+'\n'+
			'via: '+this.via+'\n'+
			'recapito: '+ this.recapito+'\n'+
			'allergeni: '+ this.allergeni;
	};
};

/**
  * Comparatore tra utenti
  * @param {User} u1
  * @param {User} u2
*/
var UserComparator = function(u1,u2){
	if(u1 instanceof User && u2 instanceof User){
		return u1.id - u2.id;
	}
	return -1;
};

/**
  * Funzione che cerca un utente dato l'id
  * @param {Number} id l'id da ricercare
  * @return {User} ritorna l'utente con l'id passato come parametro, oppure null se non c'è
*/
var cercaUtenteId = function(id){
	for (var i in users){
		if(users[i] != undefined && i == id){
			return users[i];
		}
	}
	return null;
}

/**
  * Funzione che cerca un utente data la sua E-mail e la password
  * Viene utilizzata per il Log-In
  * @param {String} mail l'E-mail da ricercare
  * @param {String} password la password dell'utente per verificare l'accesso
  * @return {User} ritorna l'utente con quella mail e password, null se non c'è oppure la mail o password sono sbagliate
*/
var  cercaUtenteMailPassword = function(mail,password){
	for(var i in users){
		var u = users[i]
		if(u != undefined){
			if(u.mail.localeCompare(mail) == 0 && u.password.localeCompare(password) == 0){
				return u;
			}
		}
	}
	return null;
}

/**
  * Funzione che controlla se esiste già la mail
  * @param {String} mail la E-mail da controllare
  * @return {Boolean} false se la mail è già presente, false altrimenti
*/
var checkMail = function(mail){
	for (var i in users){
		if(users[i].mail.localeCompare(mail) == 0){
			return false;
		}
	}
	return true;
}

/**
  * Funzione che aggiunge al vettore l'utente passato come parametro
  * @param {User} u l'utente da aggiungere
  * @return {Number} l'id associato all'utente aggiunto | undefined se l'inserimento non è andato a buon fine
*/
var addUser = function(u){
	if(u instanceof User){
		if(checkMail(u.mail)){
			var id = users.push(u) -1;
			u.id = id;
			return id;
		}
	}
}

/**
  * Funzione che rimuove un utente dall'array dato l'id
  * @param {Number} id l'id dell'utente da eliminare
*/
var deleteUser = function(id){
	delete users[i];
}

/**
  * Funzine che permette di aggiungere le allergie ad un utente dato l'id
  * @param {Number} id l'id dell'utente a cui aggiungere le allergie
  * @param {String|Array[String}} allergie le allegie da aggiungere all'utente
*/
var aggiungiAllergie = function(id,allergie){
	var u = cercaUtente(id);
	if(u != null){
		if(allergie instanceof String || typeof allergie == 'string'){
			u.allergie.push(allergie);
		}
		if(allergie instanceof Array){
			allergie.concat(allergie);
		}
	}
}



exports.User = User;
exports.UserComparator = UserComparator;
exports.cercaUtenteId = cercaUtenteId;
exports.cercaUtenteMailPassword = cercaUtenteMailPassword;
exports.checkMail = checkMail;
exports.addUser = addUser;
exports.deleteUser = deleteUser;
exports.aggiungiAllergie = aggiungiAllergie;

/********************
 * Gestione piatti  *
 ********************/

var PRIMO = 'primo';
var SECONDO = 'secondo';
var CONTORNO = 'contorno';
var DESSERT = 'dessert';

/**
  * Costruttore di un piatto
  * @param {String} nome il nome del piatto
  * @param {String} ingredienti gli ingredienti del piatto
  * @param {String} curiosita le curiosità del piatto
  * @param {String} foto il percorso della foto del piatto
  * @param {Array[String]} allergeni gli allergeni contenuti nel piatto
  * @param {String} tipo se è primo/secondo/contorno/dessert
*/
var  Piatto = function(nome,ingredienti,curiosita,foto,allergeni,tipo){
	if(typeof nome != 'string' || 
		typeof ingredienti != 'string' || 
		typeof curiosita != 'string' || 
		typeof foto != 'string' ||
		!(allergeni instanceof Array) ||
		typeof tipo != 'string' ||
		(tipo.localeCompare(PRIMO) != 0 &&
		tipo.localeCompare(SECONDO) != 0 &&
		tipo.localeCompare(CONTORNO) != 0 &&
		tipo.localeCompare(DESSERT) != 0 )
		){
		return null;
	}
	this.nome = nome;
	this.ingredienti = ingredienti;
	this.curiosita = curiosita;
	this.foto = foto;
	this.allergeni = allergeni;
	this.tipo = tipo;
	
	this.toString = function(){
		return 'nome: '+this.nome+'\n'+
			'e\'un: '+ this.tipo+'\n'+
			'ingredienti: '+this.ingredienti+'\n'+
			'curiosita\': '+this.curiosita+'\n'+
			'percorso foto: '+this.foto+'\n'+
			'allergeni contenuti: '+this.allergeni;
	}
}

/**
  * Comparatore tra piatti
  * @param {Piatto} p1
  * @param {Piatto} p2
*/
var PiattoComparator = function(p1,p2){
	if(p1 instanceof Piatto && 
		p2 instanceof Piatto){
		
		return p1.nome.localeCompare(p2.nome);
	}
	return -1;
}

/**
  * Funzione che controlla se il nome del piatto è già stato inserito
  * @param {String} nome il nome da cercare
  * @return {Boolean} true se il nome non è stato già inserito, false altrimenti
*/
var checkNomePiatto = function(nome){
	for(var i in piatti){
		var p = piatti[i];
		if(p != undefined && p.nome.localeCompare(nome)==0){
			return false
		}
	}
	return true;
}

/**
  * Funzione che aggiunge un piatto alla lista
  * @param {Piatto} p piatto da aggiungere
  * @return {Boolean} true se il piatto è stato inserito correttamente, false altrimenti
*/
var addPiatto = function(p){
	if(p instanceof Piatto){
		if(checkNomePiatto(p.nome)){
			piatti.push(p);
			return true;
		}
	}
	return false;
}

/**
  * Funzione che elimina un piatto
  * @param {String} nome nome del piatto da eliminare
  * @return {Boolean} true se l'eliminazione è andata a buon fine, false altrimenti
*/
var deletePiatto = function(nome){
	for(var i in piatti){
		if(piatti[i].nome.localeCompare(nome)==0){
			delete piatti[i];
			return true;
		}
	}
	return false;
}

/**
  * Funzione che restituisce un piatto dato il nome
  * @param {String} nome il nome del piatto da cercare
  * @return {Piatto} il piatto con il nome dato, undefined se non è presente
*/
var getPiatto = function(nome){
	for (var i in piatti){
		if(piatti[i].nome.localeCompare(nome) == 0){
			return piatti[i];
		}
	}
}

/**
  * Funzione che permette di ottenere tutti i piatti di un certo tipo
  * @param{String} tipo il tipo che si vuole ottenere
  * @return {Piatti[]} un vettore di piatti di quel tipo
*/
var getPiattiTipo = function(tipo){
	var ret = [];
	if(tipo.localeCompare(PRIMO) == 0 ||
		tipo.localeCompare(SECONDO) == 0 ||
		tipo.localeCompare(CONTORNO) == 0 ||
		tipo.localeCompare(DESSERT) == 0 ){
	
		for(var i in piatti){
			if(piatti[i] != undefined && piatti[i].tipo == tipo){
				ret.push(piatti[i]);
			}
		}
	}
	return ret;
}



exports.PRIMO = PRIMO;
exports.SECONDO = SECONDO;
exports.CONTORNO = CONTORNO;
exports.DESSERT = DESSERT;

exports.Piatto = Piatto;
exports.PiattoComparator = PiattoComparator;
exports.checkNomePiatto = checkNomePiatto;
exports.addPiatto = addPiatto;
exports.deletePiatto = deletePiatto;
exports.getPiatto = getPiatto;
exports.getPiattiTipo = getPiattiTipo;

/*****
  Init
******/
addUser(new User('nome','cognome','via da qui',new Date('1995-12.29'),'0123456789','nome@gmail.com','password',[]));

addPiatto(new Piatto('Pasta al Ragu\'','pasta gr. 80\nragu\''),'Non ci sono curiosita\'','',[],PRIMO);
addPiatto(new Piatto('Arrosto di Maiale','Arrosto gr. 100'),'Non ci sono curiosita\'','',[],SECONDO);
addPiatto(new Piatto('Capuccio','Capuccio gr. 50\nSale, Olio, Aceto qb'),'Il capuccio e\' stato coltivato la prima volta da ...','',[],CONTORNO);
addPiatto(new Piatto('Budino','[Ingredienti del budino]'),'Non ci sono curiosita\'','',[],DESSERT);

