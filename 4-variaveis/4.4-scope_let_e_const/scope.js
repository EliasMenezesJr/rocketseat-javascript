// LET 

//const e let são locais e só funcionaem no escopo onde foi criada

//console.log('> existe y antes do bloco?', y) da erro, não existe
{
    // console.log('existe y antes da referencia?' y) ele entende que existe mas da erro
    let y = 0
    console.log('> y existe dentro e depois da referencia', y)
}
//console.log('>existe y depois do bloco?', y) da erro, não existe

// assim funciona

let y = 1

{
    y=3
    console.log('> existe', y)
} console.log('> existe y depois do bloco?', y)


// CONST 

const z = 1;

{
    //z = 0; vai da erro, não pode trocar o valor
}

// criando uma nova funciona
{
    const z = 0;
    console.log('criando uma nova const podemos mudar o valor z =', z)
}