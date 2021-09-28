// function expression
// função anonima - function anonymous
let total = 0;
//parametros (parameters)
const sum = function(number1, number2) {
    let total = number1 + number2 
    return total // para retornar o resultado
}

let number11 = 34
let number22 = 25
sum(number11, number22) // arguments - argumentos

console.log(`O número 1 é ${number11}`)
console.log(`O número 2 é ${number22}`)
console.log(`A soma entre ${number11} e ${number22} é ${sum(number11, number22)}`)

console.log(total)