// Un alert() espone 5 numeri generati casualmente.

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

// Alert che mostra i numeri all'utente
alert( "I numeri da ricordare sono: " + numeriComputer);




// Da li parte un timer di 30 secondi.

// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.