/*
    Palidroma
    Chiedere all’utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma
*/

const word = prompt("Inserisci una parola");

// restituisce true se l'argomento word è una stringa palindroma, altrimenti restiruisce false 
function isPalindrome(word) {
    let result = true;

    for (let i = 0; i < word.length; i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            return false;
        }
    }

    return result;
}

// test della funzione
if (isPalindrome(word)) {
    console.log(`La stringa ${word} è palindroma.`);
} else {
    console.log(`La stringa ${word} NON è palindroma.`);
}