// Manipulando Strings e Arrays 

// Separando um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaço, coloque _

let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ") // separa os elementos do array
let phraseWithUnderscore = myArray.join("_") // escolhe no argumento o que vai separar os elementos

console.log(phraseWithUnderscore);


// Para separar um texto por espaços, pode-se usar o método split(" "), que transforma o texto em um array de strings baseado no argumento, que no caso são os espaços. Para juntar esse array é possível usar o método join('"), que juntaria essas palavras sem nenhum separador, porém colocando um argumento, no caso um underscore ( join("_") ) as palavras são juntadas com o argumento de separador.