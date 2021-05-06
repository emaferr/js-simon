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

    var tempo = 5 ;

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

                var numeroUtente = parseInt(prompt("Inserisci un numero"))

                if ( !numeriUtente.includes ( numeroUtente ) ) {

                numeriUtente.push ( numeroUtente );

                }

                console.log(numeriUtente);

            }
            
        }

    } , 1000)

} 

console.log(numeriComputer);












// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.