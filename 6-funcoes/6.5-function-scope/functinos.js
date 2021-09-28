///function scope 1
console.log('function scope 1---------------------------------');
let subject1 

function createThink1(subject1){
    return subject1
}

console.log(createThink1(subject1));
// undefined - retorna o valor indefinido porque a variável subject é declarada mas não te valor



///function scope 2
console.log('function scope 2---------------------------------');

let subject2 ='Create video2'

function createThink2(subject2){
    return subject2
}

console.log(createThink2(subject2));
// Create video2 -  agora a variável subject2 tem valor, assim retornará ele na function


///function scope 3
console.log('function scope 3---------------------------------');

let subject3 ='Create video3'

function createThink3(subject3){
    return subject3
}

console.log(subject3);
// retorna a mesma resposta da função
console.log(createThink3(subject3));
// Create video2 -  agora a variável subject3 tem valor, assim retornará ele na function


///function scope 4
console.log('function scope 4-------------------------------- ');

let subject4 ='Create video4'

function createThink4(subject4){
    subject4 = 'study4'
    return subject4
}

console.log(createThink4(subject4));
// study4 -  o valor retonrnado na função é diferente da variável
console.log(subject4);
// o valor retonrnado na variável é diferente da função
 


// function scope 5
console.log('function scope 5--------------------------------');
let subject5 // começa sem valor

function createThink5 (){
    subject5 = 'study5' // cria o valor
    return subject5
}

console.log(subject5); // undefined - variável sem valor 
console.log(createThink5()); // se retirar o argumento e o parametro, as duas viram study
console.log(subject5); // retonna valor da variável


// function scope 6
console.log('function scope 6--------------------------------');
let subject6 

function createThink6 (){
    subject6 = 'study6'
}

console.log(subject6); // 
createThink6() // somente atualiza o valor de subject6
console.log(subject6);