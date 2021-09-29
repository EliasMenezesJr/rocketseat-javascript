/*
    Function() constructor

    * expressão new 
    * criar um nono objeto
    * this keywork
    
*/

// não é obrigatório usar a primeira letra maiúscula, éuma boa prática

function Person(name){
    this.name = name
    this.walk = function() {
        return this.name + ' está andando'
    }
}
const mayk = new Person("Mayk")
const joao = new Person("João")
console.log(mayk.walk());
console.log(joao);