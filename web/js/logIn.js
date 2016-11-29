/**************************************************************************************
SCRIPT PER IL SIGNIN
**************************************************************************************/

/**
* Controlla se fare il submit del form oppure da un messaggio di errore
*/
function controlloInvia(){

	var ok = controlloValidita("iNome") && controlloValidita("iCognome") && controlloValidita("iIndirizzo") && controlloValidita("iData") && controlloValidita("iNumero");
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
	if(oggetto.value!="")
		return true;
	else
		return false;			
}
