																			// [CR] = Code Review
//express lib
var express = require('express');											// [CR] Per poter utilizzare le sessione è necessario includere il modulo
//inspect																	// 'express-session'
var util = require('util');

//instantiate express
var app = express();

//POST
var bodyParser = require('body-parser');

// PER INCLUDERE I FILE CSS E IL FILE SCRIPT.JS
app.use(express.static(__dirname+'/public'));

app.use(bodyParser.urlencoded({ extended: false }));

//IMPOSTATA LA PORTA
app.set('port', (process.env.PORT || 1338));


/**
 * @brief RESTITUISCE LA PAGINA HOME
 */
app.get('/home',function(req,res)
{
    res.sendFile(__dirname + '/home.html'); 
});


/**
 * @brief RESTITUISCE LA PAGINA AIUTO
 */
app.get('/aiuto',function(req,res)
{
    res.sendFile(__dirname + '/aiuto.html'); 
});


/**
 * @brief RESTITUISCE LA PAGINA ORDINA
 */
app.get('/ordina',function(req,res)
{
    res.sendFile(__dirname + '/ordina.html'); 
});


/**
 * @brief RESTITUISCE LA PAGINA CONFERMA ORDINE
 */
app.get('/conferma_ordine',function(req,res)
{
    res.sendFile(__dirname + '/conferma_ordine.html'); 
});


/**
 * @brief RESTITUISCE LA PAGINA ORDINE VUOTO
 */
app.get('/ordine_vuoto',function(req,res)
{
    res.sendFile(__dirname + '/ordine_vuoto.html'); 
});


///////////////////////////////////////////////////////////////////////////////


// DICHIARAZIONI VARIABILI 																// [CR] L'utilizzo di queste variabili per fare la prenotazione dei pasti
																						// compromente il funzionamento del sistema, in quanto queste sono globali
var lunedi =																			// e non specifiche per ogni utente; ciò significa che l'ordine fatto da un
    {																				   // utente va a sovrascrivere l'ordine fatto da un'altro.
        primo:null, 																	  // Questo problema sarebbe risolvibile applicando l'utilizzo delle sessioni,
        secondo: null,																   // salvando quindi la prenotazione all'interno della sessione.
        contorno: null,
        dessert: null
    };

var martedi =
    {
        primo:null, 
        secondo: null,
        contorno: null,
        dessert: null
    };

var mercoledi =
    {
        primo:null, 
        secondo: null,
        contorno: null,
        dessert: null
    };

var giovedi =
    {
        primo:null, 
        secondo: null,
        contorno: null,
        dessert: null
    };

var venerdi =
    {
        primo:null, 
        secondo: null,
        contorno: null,
        dessert: null
    };

var sabato =
    {
        primo:null, 
        secondo: null,
        contorno: null,
        dessert: null
    };

var domenica =
    {
        primo:null, 
        secondo: null,
        contorno: null,
        dessert: null
    };

///////////////////////////////////////////////////////////////////////////////////////////////


// BOOLEANO PER SAPERE SE E' STATO INVIATO UN ORDINE
var pasto_odinato = false; 


/**
 * @brief RESTITUISCE LA PAGINA CONFERMA ORDINE E RICEVE I PASTI E LE SALVA NELLE VARIABILI GLOBALI
 */

app.post('/invio_ordine',function(req,res)
{
    pasto_odinato = true;   
    
    //LUNEDI
    lunedi.primo = req.body.lunedi_primo;															// [CR] Dovrebbe essere eseguito in una funzione che crea l'oggetto
    lunedi.secondo = req.body.lunedi_secondo;														// Prenotazione dell'utente loggato.
    lunedi.contorno = req.body.lunedi_contorno;
    lunedi.dessert = req.body.lunedi_dessert;
    
    //MARTEDI 
    martedi.primo = req.body.martedi_primo;
    martedi.secondo = req.body.martedi_secondo;
    martedi.contorno = req.body.martedi_contorno;
    martedi.dessert = req.body.martedi_dessert;
    
    //MERCOLEDI
    mercoledi.primo = req.body.mercoledi_primo;
    mercoledi.secondo = req.body.mercoledi_secondo;
    mercoledi.contorno = req.body.mercoledi_contorno;
    mercoledi.dessert = req.body.mercoledi_dessert;
    
    //GIOVEDI
    giovedi.primo = req.body.giovedi_primo;
    giovedi.secondo = req.body.giovedi_secondo;
    giovedi.contorno = req.body.giovedi_contorno;
    giovedi.dessert = req.body.giovedi_dessert;
    
    //VENERDI
    venerdi.primo = req.body.venerdi_primo;
    venerdi.secondo = req.body.venerdi_secondo;
    venerdi.contorno = req.body.venerdi_contorno;
    venerdi.dessert = req.body.venerdi_dessert;
    
    //SABATO
    sabato.primo = req.body.sabato_primo;
    sabato.secondo = req.body.sabato_secondo;
    sabato.contorno = req.body.sabato_contorno;
    sabato.dessert = req.body.sabato_dessert;
    
    //DOMENICA
    domenica.primo = req.body.domenica_primo;
    domenica.secondo = req.body.domenica_secondo;
    domenica.contorno = req.body.domenica_contorno;
    domenica.dessert = req.body.domenica_dessert;
    
    
    //PER CONTROLLARE SE E' UN ORDINE VUOTO
    if(
        lunedi.primo == "NIENTE" && lunedi.secondo == "NIENTE" &&
        lunedi.contorno == "NIENTE" && lunedi.dessert == "NIENTE" &&
        
        martedi.primo == "NIENTE" && martedi.secondo == "NIENTE" &&
        martedi.contorno == "NIENTE" && martedi.dessert == "NIENTE" &&
        
        mercoledi.primo == "NIENTE" && mercoledi.secondo == "NIENTE" &&
        mercoledi.contorno == "NIENTE" && mercoledi.dessert == "NIENTE" &&
        
        giovedi.primo == "NIENTE" && giovedi.secondo == "NIENTE" &&
        giovedi.contorno == "NIENTE" && giovedi.dessert == "NIENTE" &&
        
        venerdi.primo == "NIENTE" && venerdi.secondo == "NIENTE" &&
        venerdi.contorno == "NIENTE" && venerdi.dessert == "NIENTE" &&
        
        sabato.primo == "NIENTE" && sabato.secondo == "NIENTE" &&
        sabato.contorno == "NIENTE" && sabato.dessert == "NIENTE" &&
        
        domenica.primo == "NIENTE" && domenica.secondo == "NIENTE" &&
        domenica.contorno == "NIENTE" && domenica.dessert == "NIENTE"
      )
    {
        pasto_odinato = false;
        res.sendFile(__dirname + '/ordine_vuoto.html');     
    }
    
    res.sendFile(__dirname + '/conferma_ordine.html'); 
});


//////////////////////////////////////////////////////////////////////////////////////////////



var bind = require('bind');																						// [CR] Sarebbe da spostare e unire agli altri require.


/**
 * @brief RESTITUISCE LA PAGINA PASTI ORDINATI E INVIA ALLA PAGINA I DATI DEI PASTI
 */

app.get('/pasti_ordinati',function(req,res)
{
    if(pasto_odinato)
    {    
    bind.toFile(__dirname + '/pasti_ordinati.tpl', 												// [CR] Sistemare indentazione
	{
            //VALORI MANDATI ALLA PAGINA "pasti_ordinati.tpl"									// [CR] La prenotazione dovrebbe essere estratta dalla sessione
            pasto_odinato : pasto_odinato,													   // e i vari dati dovrebbero essere estratti dall'oggetto Prenotazione
        
            //LUNEDI
            lunedi_primo: lunedi.primo,
            lunedi_secondo: lunedi.secondo,
            lunedi_contorno: lunedi.contorno,
            lunedi_dessert: lunedi.dessert,
        
            //MARTEDI
            martedi_primo: martedi.primo,
            martedi_secondo: martedi.secondo,
            martedi_contorno: martedi.contorno,
            martedi_dessert: martedi.dessert,
        
            //MERCOLEDI
            mercoledi_primo: mercoledi.primo,
            mercoledi_secondo: mercoledi.secondo,
            mercoledi_contorno: mercoledi.contorno,
            mercoledi_dessert: mercoledi.dessert,
        
            //GIOVEDI
            giovedi_primo: giovedi.primo,
            giovedi_secondo: giovedi.secondo,
            giovedi_contorno: giovedi.contorno,
            giovedi_dessert: giovedi.dessert,
        
            //VENERDI
            venerdi_primo: venerdi.primo,
            venerdi_secondo: venerdi.secondo,
            venerdi_contorno: venerdi.contorno,
            venerdi_dessert: venerdi.dessert,
        
            //SABATO
            sabato_primo: sabato.primo,
            sabato_secondo: sabato.secondo,
            sabato_contorno: sabato.contorno,
            sabato_dessert: sabato.dessert,
        
            //DOMENICA
            domenica_primo: domenica.primo,
            domenica_secondo: domenica.secondo,
            domenica_contorno: domenica.contorno,
            domenica_dessert: domenica.dessert
        }, 
        function(data) 
        {   
            //write response
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }
    else
    {
        res.sendFile(__dirname + '/nessun_pasto.html');  
    }
                 
});


////////////////////////////////////////////////////////////////////////////////////////////////

//DICHIARAZIONE UTENTI REGISTRATI

var lista_utenti = [																// [CR] Vedi commento riguardo alle variabili globali.
    ["utente1","password1"],
    ["utente2","password2"],
    ["utente3","password3"],
    ["utente4","password4"]
];



app.get('/',function(req,res)
{
    res.sendFile(__dirname + '/login.html'); 
});


/**
 * @brief RESTITUISCE LA PAGINA HOME SE L'UTENTE E' REGESTRATO ALTRIMENTI ALTRIMENTRI RICARICA LA PAGINA
 */
app.post('/home',function(req,res)
{
    var utente_presente = false;
    
    var utente = req.body.utente;
    var password = req.body.password;
  
    for(var i = 0 ; i < lista_utenti.length ; i++)											// [CR] Dovrebbe essere eseguito in una funzione che effettua il login
    {    																					 // dell'utente e prepara le strutture dati necessarie da inserire
        if(utente == lista_utenti[i][0] && password == lista_utenti[i][1])					// all'intero della sessione
        {
            utente_presente = true;
        }
    }
    
    if(utente_presente)
    {
        res.sendFile(__dirname + '/home.html');
    }
    else
    {
        res.sendFile(__dirname + '/login.html'); 
    }
    
});




//INFORMARE L'UTENTE DELLA PORTA CHE SI UTILIZZA E DELL'URL DELLA PAGINA DI LOGIN

app.listen(app.get('port'), function()           
{
    console.log('Node app is running on port', app.get('port'));
    console.log('Server running at http://127.0.0.1:1338/');										// [CR] No è detto che l'indirizzo e la porta siano quelli indicati. 
});																								 // Questo è vero solo se l'applicazione è eseguita in locale.

