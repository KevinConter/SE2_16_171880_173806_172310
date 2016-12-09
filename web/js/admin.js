/**************************************************************************************
SCRIPT PER IL LOGIN
**************************************************************************************/

/**
 * Resetta le classi dei campi di input (toglie il successo o insuccesso)
 */
function resetta(){
	document.getElementById("cCerca").className="form-group";
	document.getElementById("cNome").className="form-group";
	document.getElementById("Foto").value="";
	document.getElementById("LabelFoto").className="form-control center-block labelFoto";
	$("#LabelFoto").css("background-image", "none");
}

/**
* Controlla se fare il submit del form oppure da un messaggio di errore
*/
function controlloCerca(){

	var ok = controlloValidita("iCerca") ;
	if(ok)
		document.getElementById("search").submit();
	else
		alert("Form incompleto");	
}

/**
* Controlla se fare il submit del form oppure da un messaggio di errore
*/
function controlloInvia(){

	var ok = controlloValidita("iNome") ;
	if(ok)
		document.getElementById("modulo").submit();
	else
		alert("Form incompleto");	
}

function cambiaFoto(){
	var reader = new FileReader();
	// Read the local file as a DataURL
	reader.readAsDataURL(document.getElementById("Foto").files[0]);
	if(document.getElementById("Foto").files[0].size>=8388608){
		alert("Il file selezionato per l'immagine di profilo è troppo grande!\nLa dimensione massima consentita è: 8 MB.");
		document.getElementById("Foto").value="";
		document.getElementById("LabelFoto").className="form-control center-block labelFoto";
	}else{
		// When loaded, set image data as background of page
		reader.onloadend = function(){
			$("#LabelFoto").css("background-image", "url(" + this.result + ")");
			$("#LabelFoto").css("background-repeat","no-repeat");
		};
	}   
}