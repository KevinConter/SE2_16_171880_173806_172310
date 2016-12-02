/**************************************************************************************
SCRIPT PER IL SIGNIN
**************************************************************************************/

/**
 * Resetta le classi dei campi di input (toglie il successo o insuccesso)
 */
function resetta(){
	document.getElementById("cNome").className="form-group";
	document.getElementById("cCognome").className="form-group";
	document.getElementById("cIndirizzo").className="form-group";
	document.getElementById("cData").className="form-group";
	document.getElementById("cRecapito").className="form-group";
	document.getElementById("cMail").className="form-group";
	document.getElementById("cPassword").className="form-group";
}

/**
* Controlla se fare il submit del form oppure da un messaggio di errore
*/
function controlloInvia(){

	var ok = controlloValidita("iNome") && controlloValidita("iCognome") && controlloValidita("iIndirizzo") && controlloValidita("iData") && controlloValidita("iRecapito") && controlloValidita("iMail") && controlloPassword("iPassword");
	if(ok)
		document.getElementById("modulo").submit();
	else
		alert("Form incompleto");	
}