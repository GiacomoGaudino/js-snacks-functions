/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
/*
function firstChar(nameArray) {
    let initials = [];
    for (i = 0; i < nameArray.length; i++) {
        const thisChar = nameArray[i].charAt(0);
        initials.push(thisChar);
    }
    return initials;
}
*/
//arrow function
const firstChar = (nameArray) => {
    let initials = [];
    for (i = 0; i < nameArray.length; i++) {
        const thisChar = nameArray[i].charAt(0);
        initials.push(thisChar);
    }
    return initials;
}




// Invoca la funzione qui e stampa il risultato in console
const namesInitial = firstChar(names);
console.log(namesInitial);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]