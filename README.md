# SE2_16_171880_173806_172310_P
Progetto finale di Ingegneria del Software 2.


DESCRIZIONE
L'applicazione sviluppata in questo progetto è lo sviluppo del prototipo creato per APSP
di un applicazione per la prenotazione dei pasti da portare a domicilio degli utenti registrati
presso l'azienda.
L'applicazione è sviluppata principalmente per un utilizzo da parte dei clienti; è presente una
parte destinata all'utilizzo dell'amministratore che permette di visualizzare le prenotazioni ricevute
e permette di inserire o eliminare pasti dal menù.
L'app permette agli utenti di prenotare il pasto per un singolo giorno, con 4 giorni di anticipo.
Come definito nelle user story stipulate in fase di progettazione, la registrazione degli utenti
avviene per mano di un incaricato dell'azienda, che al momento della presentazione della domanda
di iscrizione, registra l'utente al sistema. In seguito, l'utente ogni giorno deve effetture l'accesso
ed eseguire la prenotazione.

STRUTTURA
La struttura del sistema è composta in questo modo:
	- nella root directory troviamo il file server.js che contiene tutte le direttive ad API del server.
	  
	- La directory 'moduli' contiene i moduli esterni che vengono utilizzati dal server per la gestione
	  di dati e funzioni particolari.
	  
	- La directory 'tmp' è stata creata per la memorizzazione temporanea dei file che dal client vengono
	  inviati al server (avviene quando l'ammnistatore aggiunge un nuovo piatto); tali file vengono poi
	  spostati all'interno della directory 'web/immagini'.
	
	- La directory 'tpl' contiene tutti i template che vengono utilizzati dal server, e tutti i file che
	  non devono essere accessibili da un utente che non è stato autenticato.
	  
	- La directory 'web' contiene tutti i file che sono accessibili dall'utente in qualsiasi momento e i file
	  che vengono richiesti dal browser (css, js e immagini).

TEST
L'applicazione è molto semplice da usare.
Utilizzando un normale PC, è necessario installare i moduli specificati all'interno del file package.json
per poter rendere funzionante il server. Completata l'installazione, basta far partire il server, aprire
il browser e digitare localhost:8848 all'interno della barra degli indirizzi, oppure copiare e incollare
il link sottostante:
		http://localhost:8848/

Per poter eseguire i test cases è necessario il programma JASMINE e un modulo ulteriore, cioè REQUEST.
Dopo aver installato il programma e il modulo ed essersi spostati all'interno del branch TEST, è possibile
far eseguire i test cases con il comando NPM TEST nel terminale.

HEROKU
L'applicazione è anche disponibile online all'indirizzo sottostante su HEROKU, ed utilizzabile quindi
anche su telefono.

Link app heroku: https://lit-river-83410.herokuapp.com/

