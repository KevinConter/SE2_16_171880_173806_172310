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
  * @param {optional Array[String]} allergeni una lista di allergeni. Può essere omessa
*/
function User(nome,cognome,data,mail,password,via,recapito,allergeni = []){
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
		'via: '+this.via+'\n'+
		'recapito: '+ this.recapito+'\n'+
		'allergeni: '+ this.allergeni;
	};
}

/**
  * Variabile per la comparazione tra gli utenti
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
function cercaUtente(id){
	for (var i=0 ; i<users.length ; i++ ){
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
function cercaUtente(mail,password){
	for(var i=0 ; i<users.length ; i++){
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
function chechMail(mail){
	for (var i=0 ; i<users.length ; i++ ){
		if(users[i].mail.localeCompare(mail) == 0){
			return false;
		}
	}
	return true;
}

/**
  * Funzione che aggiunge al vettore l'utente passato come parametro
  * @param {User} u l'utente da aggiungere
  * @return {Number} l'id associato all'utente aggiunto | undefined se non è un utente
*/
function addUser(u){
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
function deleteUser(id){
	delete users[i];
}

/**
  * Funzine che permette di aggiungere le allergie ad un utente dato l'id
  * @param {Number} id l'id dell'utente a cui aggiungere le allergie
  * @param {String|Array[String}} allergie le allegie da aggiungere all'utente
*/
function aggiungiAllergie(id,allergie){
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


