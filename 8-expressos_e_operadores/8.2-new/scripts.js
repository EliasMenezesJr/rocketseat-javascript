/*
    new

    * left-hand expression 
    * criar um novo objeto 
*/

// forma objetos
let name = new String('Miyk')
name.surName = "Brito"
let age = new Number(23)
console.log(name, name.surName, age);

let date = new Date("2020-12-01")
console.log(date);
// propriedade de new Date
console.log(date.__proto__)

console.log(date.getDay());
