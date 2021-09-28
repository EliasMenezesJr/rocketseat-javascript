    // 1. Declare uma variável de nome weight:
    let weight

    // 2. Que tipo de dado é a variável acima?
    console.log(typeof weight)
    //R: undefined

    /* 
        3. declare uma variável e atribua valores para cada um dos dados:
            * name: String  
            * age: Number(integer)
            * stars: Number(float)
            * isSubscribed: Boolean 
    */
    let name = "Mayk"
    let age = 36
    let starts = 1.80
    let isSubscribed = true

    
    // 4. A variável student abaixo é de tipo de dados?
    let student ={};
    //R.: object

    // 4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.
    student = {name: "Mayk", age: 36, weight: 74.8, isSubscribed: true}

    /* 4.2 Mostre no console a seguinte mensagem:
        <name> de idade <age> pesa <weight> Kg.

        Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
    */
   console.log(`${student.name} de idade ${student.age} pesa ${student.weight} Kg.`)


   /* 
        5. Declare uma viriável do tipo Array, de nome students e atribua a ela nenhum valor, seja, somente Array vazio
    */
   let students = []

   /* 
        6. reatribua valor para a variável acima, colocando dentro dela objeto student da questão4. (não copiar e colar objeto, mas usar o objeto criado e inserir ele no Array)
    */
   stutends =[student]

   /* 
        7. Coloque no console o valor da posição zero do Array acima:

    */
   console.log(stutends[0])

   /*
        8. Criar um novo student e colocar na po´sição 1 do Array students:
    */
   const john = {name: "John", age: 23, weight: 70, isSubscribed: false}
    students[1] = john

    /*
        *. Sme rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou. Se
    */
        console.log(a)
        var a = 1
    // R.: undefined, a console veio antes da declaração e atribuição da variável a. Rosting pega a variável mas não pega o valor, ele declara mas não atribui valor.