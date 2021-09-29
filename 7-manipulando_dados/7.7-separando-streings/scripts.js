// Manipulando Strings e Arrays 

// Separando um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaço, coloque _

let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ") // separa os elementos do array
let phraseWithUnderscore = myArray.join("_") // escolhe no argumento o que vai separar os elementos

console.log(phraseWithUnderscore);