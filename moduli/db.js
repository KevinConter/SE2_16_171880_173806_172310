var users = [];
var piatti = [];

/**************************
 * Gestione degli utenti  *
 **************************/

/**
  *	Costruttore di un utente
  * @param {String} nome il nome della persona
  * @param {String} cognome il comgnome della persona
  * @param {Date} data la data di nascita della persona
  * @param {String} mail l'e-mail con cui si è registrata la persona
  * @param {String} password la password di log-in dell'utente
  * @param {String} via l'indirizzo della persona
  * @param {String|Array[String]} recapito un recapito oppure una lista di recapiti
  * @param {Array[String]} allergeni una lista di allergeni. Può essere omessa
*/
var User = function(nome,cognome,data,mail,password,via,recapito,allergeni){
	if(typeof nome != 'string' || 
		typeof cognome != 'string' || 
		! (data instanceof Date) || 
		typeof mail != 'string' || 
		typeof password != 'string' || 
		typeof via != 'string' || 
		!(typeof recapito == 'string' || (recapito instanceof Array)) || 
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
			'E-mail: '+this.mail+'\n'+
			'via: '+this.via+'\n'+
			'recapito: '+ this.recapito+'\n'+
			'allergeni: '+ this.allergeni;
	};
};
exports.User = User

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
exports.UserComparator = UserComparator;

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
exports.cercaUtenteId = cercaUtenteId;

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
exports.cercaUtenteMailPassword = cercaUtenteMailPassword;

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
exports.checkMail = checkMail;

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
exports.addUser = addUser;

/**
  * Funzione che rimuove un utente dall'array dato l'id
  * @param {Number} id l'id dell'utente da eliminare
*/
var deleteUser = function(id){
	delete users[i];
}
exports.deleteUser = deleteUser;

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
exports.aggiungiAllergie = aggiungiAllergie;

/********************
 * Gestione piatti  *
 ********************/

/**
  * Costruttore di un piatto
  * @param {String} nome il nome del piatto
  * @param {String} ingredienti gli ingredienti del piatto
  * @param {String} curiosita le curiosità del piatto
  * @param {String} foto il percorso della foto del piatto
  * @param {Array[String]} allergeni gli allergeni contenuti nel piatto
*/
var  Piatto = function(nome,ingredienti,curiosita,foto,allergeni){
	if(typeof nome != 'string' || 
		typeof ingredienti != 'string' || 
		typeof curiosita != 'string' || 
		typeof foto != 'string' ||
		!(allergeni instanceof Array)){
		return null;
	}
	this.nome = nome;
	this.ingredienti = ingredienti;
	this.curiosita = curiosita;
	this.foto = foto;
	this.allergeni = allergeni;
	
	this.toString = function(){
		return 'nome: '+this.nome+'\n'+
			'ingredienti: '+this.ingredienti+'\n'+
			'curiosita\': '+this.curiosita+'\n'+
			'percorso foto: '+this.foto+'\n'+
			'allergeni contenuti: '+this.allergeni;
	}
}
exports.Piatto = Piatto;

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
exports.PiattoComparator = PiattoComparator;

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
exports.checkNomePiatto = checkNomePiatto;

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
exports.addPiatto = addPiatto;

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
exports.deletePiatto = deletePiatto;

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
exports.getPiatto = getPiatto;


/*****
  Init
******/
addUser(new User('nome','cognome',new Date('1995-12.29'),'nome@gmail.com','password','via da qui','0123456789',[]));
