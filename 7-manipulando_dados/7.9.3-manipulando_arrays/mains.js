// Manipulando arrays 

let techs = ["html", "css","js"]

// adicinar um item no fim 
techs.push("node.js");

// adicionar no começo
techs.unshift("SQL");

// remover do fim 
techs.pop();

// remover do começo 
techs.shift();

// pegar somente alguns elementos do arrays
// console.log(techs.slice(1, 3));

// remover 1 ou mais items em qualuqer posição do array  
// console.log(techs.splice(1, 2));

// encontrar a posição de um elemento no array
let index = techs.indexOf('css')
// console.log(techs[index]);
techs.splice(index, 1);

console.log(techs);