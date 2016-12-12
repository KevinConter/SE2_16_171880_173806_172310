/**************************************************************************************
SCRIPT PER I FORM
**************************************************************************************/

/**
 * Aggiunge all'id passato le rispettive classi di successo
 * @param {string} id indica l'id al quale vanno aggiunte le classi per il successo
 */
function aggiungiSuccesso(id){
    id = id.substring(1);
    document.getElementById("c"+id).className ="form-group has-feedback has-success";
}

/**
 * Aggiunge all'id passato le rispettive classi di insuccesso
 * @param {string} id indica l'id al quale vanno aggiunte le classi per il successo
 */
function aggiungiInsuccesso(id){
    id = id.substring(1);
    document.getElementById("c"+id).className="form-group has-feedback has-error";
	 document.getElementById("i"+id).focus();
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

/**
* Controlla se il campo di input è valido
* @param {String} id che indica il rispettivo campo di input
* @return true se è valido
* @return false se non è valido
*/
function controlloPassword(id){
	oggetto=document.getElementById(id);
	if(controlloValidita(id) && oggetto.value.length>=8){
		aggiungiSuccesso(id);
		return true;
		}
	else{
		aggiungiInsuccesso(id);
		return false;			
	}
}
