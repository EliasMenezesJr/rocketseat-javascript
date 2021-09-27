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
        * Escreve em inglês
