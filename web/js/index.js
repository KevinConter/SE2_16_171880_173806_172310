/**
*	Imposta la data di oggi + 4 giorni
*/
function init(){
	var data = new Date();
	var giorni = ["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"];
	var mesi = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
    data.setDate(data.getDate() +4);
    document.getElementById("gg").innerHTML=giorni[data.getDay()];
    document.getElementById("mm").innerHTML=mesi[data.getMonth()];
 	document.getElementById("numgg").innerHTML=data.getDate();
	document.getElementById("yyyy").innerHTML=data.getFullYear();
}


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
	document.getElementById("formConferma").action="/GetResoconto";
	document.getElementById("formConferma").submit();
}

/**
*	Verifica se l'utente è sicuro di voler saltare l'ordinazione;
*	se si, invia il comando al server.
*/
function salta(){
	if(confirm("Sei sicuro di voler saltare l'ordine per la data selezionata?")){
		document.getElementById("formConferma").action="/SaltaOrdine";
		document.getElementById("formConferma").submit();
	}
}

