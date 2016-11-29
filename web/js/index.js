
/**
*	Imposta la stringa che identifica il tipo di pulsante che è stato.
*	premuto.
*/
function checkButton(str){
	document.getElementById("iHidden").value=str;
	document.getElementById("form").submit();
}

/**
*	Invia il comando di conferma al server.
*/
function conferma(){
	document.getElementById("formConferma").action="getResoconto";
	document.getElementById("formConferma").submit();
}

/**
*	Verifica se l'utente è sicuro di voler saltare l'ordinazione;
*	se si, invia il comando al server.
*/
function salta(){
	if(confirm("Sei sicuro di voler saltare l'ordine per la data selezionata?")){
		document.getElementById("formConferma").action="saltaOrdine";
		document.getElementById("formConferma").submit();
	}
}
