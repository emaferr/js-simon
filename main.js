// Creo una funzione che genera numeri random definiti fra un massimo e un minimo

function numeriCasuali ( min , max ) {

    return Math.floor ( Math.random () * ( max - min +1 ) + min )

} ;


// Creo un array dove inserire i numeri generati

var numeriComputer = [] ; 


// Creo un ciclo che permette la generazione di 5 numeri casuali

while ( numeriComputer.length < 5 ) {

    var numero = numeriCasuali ( 1 , 20 ) ;

    if ( !numeriComputer.includes ( numero ) ) {

        numeriComputer.push ( numero );

    }

}


// Un alert() espone 5 numeri generati casualmente.

var numeriRicorda = alert("I numeri da ricordare sono: " + numeriComputer);

var secondiEl = document.getElementById("secondi") ;


// Faccio in modo che alla chiusura alert parte il timer

var intervallo;


// Da qui parte un timer di 30 secondi.

if (numeriRicorda === undefined) {

    var tempo = 30 ;

    intervallo = setInterval( function() {

        tempo--

        console.log(tempo);

        secondiEl.innerHTML = tempo;

        if ( tempo === 0) {

            clearInterval(intervallo);

            // Creo un array dove inserire i numeri inseriti dall'utente

            var numeriUtente = [] ; 

            // Creo un ciclo che permette la generazione dei numeri Utente

            while ( numeriUtente.length < 5 ) { 

                var numeroUtente = parseInt(prompt("Inserisci i numeri uno per volta"))

                if ( !numeriUtente.includes ( numeroUtente ) ) {

                numeriUtente.push ( numeroUtente );

                }

            }

            document.getElementById("numeri_utente").innerHTML = "I numeri che hai inserito : " + numeriUtente.sort();

            document.getElementById("numeri_computer").innerHTML = "I numeri da indovinare : " + numeriComputer.sort();

            // Creo una variabile numeri uguali ottenuta dal confronto dei due array mediante filter e la funzione numeri_uguali

            var numeriUguali = numeriUtente.filter(function(numberi_uguali){

            return numeriComputer.includes(numberi_uguali);

            })

            // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

            document.getElementById("punteggio").innerHTML = "Hai indovinato " + numeriUguali.length + " numeri : " + numeriUguali;
              
        }

    } , 1000)

} 


