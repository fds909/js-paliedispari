/*
    Pari e Dispari

    L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    Sommiamo i due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    Dichiariamo chi ha vinto.
*/

let submit = document.getElementById("submit");
let userNum = document.getElementById("userNumber");
let userEvenOdd = document.getElementById("pariDispari");
let winner = document.getElementById("winner");
let outputSum = document.getElementById("sum");
let sum = 0;


submit.addEventListener('click',
    function() {
        let CPUNum = getRandomNum(1, 5);
        console.log(userNum.value);

        sum = parseInt(userNum.value) + CPUNum;
        outputSum.innerHTML = `La somma è ${sum}`;

        if (isEvenOdd(sum) == userEvenOdd.value) {
            console.log("L'utente ha vinto.");
            winner.innerHTML = "L'utente ha vinto.";

        } else {
            console.log("Il computer ha vinto.");
            winner.innerHTML = "Il computer ha vinto.";
        }
    }
);

// ritorna un numero intero casuale da 'from' fino a 'to'
function getRandomNum(from, to) {
    return parseInt(Math.floor(Math.random() * to) + from);
}

// ritorna 'even' se il numero inserito è pari, 'odd' altrimenti
function isEvenOdd(n) {
    let result = "odd";

    if (n % 2 == 0) {
        result = "even";
    }

    return result;
}
