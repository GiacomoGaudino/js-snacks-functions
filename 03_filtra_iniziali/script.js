/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
/*
function thisChar(nameArray, letter) {
    const firstChar = [];
    for (let i = 0; i < nameArray.length; i++) {
        if (nameArray[i].charAt(0).toLowerCase() === letter.toLowerCase()) {
            firstChar.push(nameArray[i])
        }
    }
    return firstChar;
}
*/
// arrow function
const thisChar = (nameArray, letter) => {
    const firstChar = [];
    for (let i = 0; i < nameArray.length; i++) {
        if (nameArray[i].charAt(0).toLowerCase() === letter.toLowerCase()) {
            firstChar.push(nameArray[i])
        }
    }
    return firstChar;
}
// Invoca la funzione qui e stampa il risultato in console

console.log(thisChar(names, "a"));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]