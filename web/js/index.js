
/**
*	Imposta la stringa che identifica il tipo di pulsante che è stato
*	premuto.
*/
function checkButton(str){
	document.getElementById("iHidden").value=str;
	document.getElementById("form").submit();
}
