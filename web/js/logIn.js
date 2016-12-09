/**************************************************************************************
SCRIPT PER IL LOGIN
**************************************************************************************/

/**
 * Resetta le classi dei campi di input (toglie il successo o insuccesso)
 */
function resetta(){
	document.getElementById("cMail").className="form-group";
	document.getElementById("cPassword").className="form-group";
}

/**
* Controlla se fare il submit del form oppure da un messaggio di errore
*/
function controlloInvia(){

	var ok = controlloValidita("iMail") && controlloPassword("iPassword");
	if(ok)
		document.getElementById("modulo").submit();
	else
		alert("Form incompleto");	
}