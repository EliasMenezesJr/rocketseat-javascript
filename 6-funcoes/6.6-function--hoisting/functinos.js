// function hoisting 

sayMyName()

function sayMyName(){
    console.log('Mayk');
}


// é diferente de 

sayMyName2() // não consegue acessar 

const sayMyName2 = function sayMyName2(){
    console.log('Mayk');
}
