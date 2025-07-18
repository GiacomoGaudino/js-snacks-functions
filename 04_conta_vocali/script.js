/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

/*
function allVocal (text) {
    const vocal = text.match(/[aeiouAEIOU]/g).join("").length;
    return vocal;
}
*/
// arrow function

const allVocal = (text) => text.match(/[aeiouAEIOU]/g).join("").length;

// Invoca la funzione qui e stampa il risultato in console

console.log(allVocal(word));



//Risultato atteso se si passa 'javascript': 3 (a, a, i)