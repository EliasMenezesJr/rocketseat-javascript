# Introdução 
## JavaScript:
*JavaScrip Core*

* Linguagem de programação que roda no Navegador do úsuario (front-end)
    * Se você clicar em algum botão da página e aprece uma janela, isso é o JavaScript
    * Alteração do site ou aplicativo, conforme a interação do úsuario

* Roda também no computador (back-end) 

*O que podemos fazer?*

* Podemos criar aplicações web, moblile (Reacte Native), desktop (Electron)
    * Empresas famosas que usam
    * facebook (Instagram, Whatsapp)
        * Google (Youtube, Gmail, Drive)
        * Uber 
        * Netflix
        * TikTok
        * ...

* 99.99% dos sites na web usam JavaScript
* Linguagem obrigatória para quem programa o Front-end Web

*Evolução*

* A comunidade cresce cada vez mais e a linguagem está sempre evoluindo

*O que vamos ver no curso?*
- Tipos de dados
- Variáveis
- Funções
- Condicionais
- Estruturas de repetição
- ...

*Como vai funcionar a disnânmica do curso?*

- Treino de futebol
- Treino de artes marciais

* Conceitos e fundamentos
* Prática
* Revisão

*-----------------------------------------------------------------------------*

# Primeiros Passos:
## Sintaxe

* Toda linguagem tem
* Uma boa comunicação necessita de uma boa sintaxe
* 82% dos erros para iniciantes programação com

```js
    console.log("Bem vindos ao Starter")
```

## Maneiras de executar o JavaScript

* no navegador pelo console
* pelo https://codepen.io
* pewlo VSC

## Adicionando arquivos JS

* criar um arquivo .js (ex.: main.js)
* use uma tag no html5 (scrit:src)

## Comentários
* use // ou ctrl + :
* use  /* */ para mais de uma linha, comentario de bloco

*-----------------------------------------------------------------------------*


# Tipos de dados

## Introdução arquivos
*Gramática*
* Elementos da linguagem e suas combinações
* A arte de falar e escrever corretamente para

*Vocabulário*
* Conjunto de termos e expressões
* Agrupamento de palavras

*Precisamos saber os significados*
*Presisamos continuar apredendo, para crescer nosso vocabulário.*

### Como vai ser a dinâmica do aprendizado?
*Conceitos e escrita*
> Vamos aprender os tipos de dados mais ultilizados na linguagem
* Você sabia que é possível aprender 80% de uma lingua nova, com cerca de 20% do vocabulário? (até menos)

## String
*Cadeia de caracteres*
"" // aspas duplas
'' // aspas simples
`` // template literais ou template strings

## Number
*Números*
33 // inteiros
12.5 / reais - float
NaN // Not a Number
Infinity // infinito

## Boolean
*Somente 2 valovres*
true // verdadeira
false // falso

## undefined vs null
*undefined*
    * indefinido

*null*
    * nulo
    * objeto que não possui nada dentro
    * diferente de indefinido

## Object 
    * Objeto
    * Propriedades / Atributos
    * Funcionalidades / Métodos

    { propriedade: "valor"}

## Array (Vetores)
    * Uma lista
    * Agrupamento de dado

    ["Mayk", 36]


## Conclusão - Tipos de dados

Conforme o ECMAScrip standard temos 9 tipos de dados:

*Data types*
    * Primitive / Primitive value
    * Structural
    * Structural Primitive

*Primitivos*
    * String 
    * Number
    * Boolean
    * Undefined
    * Symbol
    * BigInt

*Estruturais*
    * Object
        * Array
        * Map
        * Set 
        * Date
        * ...

    * Function

*primitivo Estrutural / Structural Root Primitive*
    * null

*-----------------------------------------------------------------------------*

# Variáveis

## Conhecendo Variáveis

    * Nomes simbólicos para receber algum valor 
    * Atalhos de código
    * Identificadores
    * 3 palavras reservadas para criar uma variável
        * var
        * let
        * const

## Tipos dinâmicos

    O JS é uma linguagem fracamenete tipada e dinâmica
        - Variáveis não precisam ter um tipo previamente definido
        - Podemos mudar o conteúdo da variável


## Scope e var 

*Scope*
    * Escopo determina a visibilidade de alguma variável no JS

*Block statement*

    ```js
    // vamos iniciar um bloco
        { 
            //aqui dentro é um bloco e posso colocar qualuqer código
        } //aqui fechamos o bloco
    ```
    o bloco, também criará um novo escopo. Chamamos de 'block scoped'

*var*

    ```js
        //var é global e poderá funcionar fora de um escopo de bloco
        console.log('> existe x antes do bloco?', x)

        { 
            var x = 0
        }

        console.log('> existe x depois do bloco?', x)
    ```

## Scope let e const 

    ```js
        //const e let são locais e só funcionaem no escopo onde foi criada
        console.log('> existe y antes do bloco?' y)
        {
            let y = 0
        }
        console.log('>existe y depois do bloco?',y)
    ```

## Nomenando variéveis

*Para criar nomes*
    * JS é case-sensitive(sensivel ao caso)
    * JS aceita a cadeia de caracteres Unicode

    -Posso:
        * Iniciar com esses caracteres especiais: $ _
        * Iniciar com letras 
        * colocar acentos
        * Letras maíusculas e mínusculas fazem diferença

    - Não posso:
        * Iniciar com números 
        * Colocar espaços vazios no nome 

    - Ideal:
        * Iniciar comCriar nomes que fazem sentido 
        * Que explique o que a variável é ou faz 
        * camelCase
        * snake_case
        * Escrve em inglês

*-----------------------------------------------------------------------------*

# Praticando e avançando

## Declaration assigment var

```js
    // variáveis e tipos de dados

    // declaração or declaration
    var name

    // assigment or atribuição de valores

    name = "mike"

    // que tipo de dado foi colocado na variável 
```


## Agrupando declarações 

```js
    let age, isHuman
    age = 18
    isHuman = true
```


## Concatenando e interpolando variáveis

```js
    // escrita de texto + variáveis
    // concatenando valores
    console.log('O'+name+'tem'+age+'anos')
    //interpolando valores com template literais or template strings
    console.log(`O ${name} tem ${age} anos.`)
```


## Objects

```js
    const person = {
        name: 'John',
        age: 30,
        weight: 88.6,
        isAdmin: true
    }

    // propriedades do objectes
    console.log(person.name)
    console.log(`O ${person.name} tem ${person.age} anos, ${person.weight} de altura e ${person.isAdmin} admin.`)
```


## Array

```js
    // Array

    const animals = [
        'Lion',
        'Monkey',
        {
            name: 'Cat',
            age: 3
        }
    ]

    // acessar valores dentro do Array
    console.log(animals[1])

    //quantidade
    console.log(animals.length)

    //objests dentro do array
    console.log(animals[2].name)
```

## Exercícios 
    Exercicos em 5- 5.6


# Funções
m6 


## Functions 
m 6.1    

## Argumentos e parêmetros
m 6.2

## Retornando valores dentro da função 
m 6.3

## Outras maneiras de entender funções
m 6.4

## Function scope
m 6.5

## Function Hoisting 
m 6.6

## Arroy function
m 6.7

    ```js
        const name = () => {
            console.log('Mayk')
        }
    ```
    função com a seta = arroy

## Callcak Function
m 6.8

    passr uma função dentro de outra função pelos parametro
    callback = chame de voltar 

## Funções contrutoras - function contructor
m 6.9 

    funções que viram objetos


# Manipulando dados
m 7


## Prototype 
m 7.1

## Type convercion coersion
m 7.2

## Strings em números
m 7.3

    Number(string) - string vc passa o frase em número ou uma variável do tipo string

    String(number) - number vc passa um número ou uma variável do tipo number

# Contando caracteres e dígitos-
m 7.4

    string.lenght - para saber a quantidade letras

    ! Atenção, para saber a quantidade de dígitos de uma variável tipo nnumber, temque converte-lá para string primeiro

    String(number).lenght


## Casas decimais

 ```js
    let number = 456.1235

    // tranformando em duas casas decimais e trocando ponto(.), por virgula(,)
    number.toFixed(2).replace(".",",")
 ```

## Maiúsculas e minúsculas

    ```js
        let myName = "miyk"
        console.log(myName.toLocaleUpperCase());

        let myName2 = "MIYK"
        console.log(myName.toLowerCase());
    ```

## Separando strings
m 7.7

    pegue uma frase e coloque na variável
    pegue a variável e use a função split(), para separar a frase em array, passe no argumento da função split() onde vc quer separar cada palavra.
    lembre-se de fazer td em outra variável

    crie outra variável e pegue a anterior adicionando outra função, a join(), no argumento da join() passe o que quer usar para unir cada elemento do array.

## Encontrando palavras em frases
m 7.8 

    crie uma variável e use a função includes(), passe como parametro e em strings qual palavra vc quer verificar se tem, a função é sensitivecase, retornará false se a mesma palavra estive com case diferente.


## Criando array com construtor
m 7.9

    crie uma variavél com new Array("a","b","c")
    também posso criar um array com X posições vazias new Array(10)

## Elementos do Array
m 7.9.1

    .lenght

## string para array 
m 7.9.2

    Array.from("PARLVRA")

## Manipulando Arrays
m 7.9.3



# Expressões e Operadores

## Expressões e Operadores
m 8.1

## New 
m 8.2