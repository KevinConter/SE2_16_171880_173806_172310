var users = [];
var piatti = [];

/**
  *	Costruttore di un utente
  * @param {string} nome il nome della persona
  * @param {string} cognome il comgnome della persona
  * @param {string} via l'indirizzo della persona
  * @param {string|Array[String]} recapito un recapito oppure una lista di recapiti
  * @param {optional Array[String]} allergeni una lista di allergeni. Può essere omessa
*/
function User(nome,cognome,via,recapito,allergeni = []){
	this.id = users.lenght;
	this.nome = nome;
	this.cognome = cognome;
	this.via = via;
	this.recapito = recapito;
	this.allergeni = allergeni;
	users[this.id] = this;
	
	this.toString = function(){
		return 'nome: '+this.nome+'\n' +
		'cognome: '+this.cognome+'\n'+
		'via: '+this.via+'\n'+
		'recapito: '+ this.recapito+'\n'+
		'allergeni: '+ this.allergeni;
		};
}

/**
  * Funzione che cerca un utente dato l'id
  * @param {int} 
*/
function cercaUtente(id){
	for (var i=0 ; i<users.length ; i++ ){
		if(users[i] != undefined && i == id){
			return users[i];
		}
	}
	return null;
}
