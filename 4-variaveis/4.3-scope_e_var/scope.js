// vamos iniciar um bloco
{ 
   let a = 0
   console.log(a)
} //aqui fechamos o bloco


// VAR

//var é global e também local
// hoisting = elevalção
console.log('> existe x antes do bloco?', x)
{ 
    var x = 0
}
console.log('> existe x depois do bloco?', x)