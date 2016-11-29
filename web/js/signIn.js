/**************************************************************************************
SCRIPT PER IL SIGNIN
**************************************************************************************/

/**
 * Aggiunge all'id passato le rispettive classi di successo
 * @param {string} id indica l'id al quale vanno aggiunte le classi per il successo
 */
function aggiungiSuccesso(id){
    id = id.substring(1);
    document.getElementById("c"+id).className ="form-group has-feedback has-success";
}

function aggiungiInsuccesso(id){
    id = id.substring(1);
    document.getElementById("c"+id).className="form-group has-feedback has-error";
}


/**
* Controlla se fare il submit del form oppure da un messaggio di errore
*/
function controlloInvia(){

	var ok = controlloValidita("iNome") && controlloValidita("iCognome") && controlloValidita("iIndirizzo") && controlloValidita("iData") && controlloValidita("iNumero") && controlloValidita("iMail") && controlloValidita("iPassword") && document.getElementById("iPassword").lenht>8;
	if(ok)
		document.getElementById("btnRegistra").submit();
	else
		alert("Form incompleto");	
}

/**
* Controlla se il campo di input è valido
* @param {String} id che indica il rispettivo campo di input
* @return true se è valido
* @return false se non è valido
*/
function controlloValidita(id){
	oggetto=document.getElementById(id);
	if(oggetto.value!=""){
		aggiungiSuccesso(id);
		return true;
		}
	else{
		aggiungiInsuccesso(id);
		return false;			
	}
}
