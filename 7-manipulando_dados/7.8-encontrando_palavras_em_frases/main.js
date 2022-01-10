// Manipulando Strings 

// verificar se o texto contém a palavra Amor

let phrase = "Eu quero viver!"
console.log(phrase.includes("Amor"));

phrase = "Eu quero viver o amor!"
console.log(phrase.includes("Amor"));

phrase = "Eu quero viver o Amor!"
console.log(phrase.includes("Amor"));

// Para verificar se um texto possui uma palavra específica, podemos usar o método includes(), passando como argumento a palavra a ser verificada, que retorna um valor true se encontrar a palavra, e falso se não, lembrando sempre que o método é case sensitive.