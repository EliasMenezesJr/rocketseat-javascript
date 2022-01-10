// Manipulando Arrays


// Contar elementos de um array
console.log([
    "a",
    {type: "array"},
    () => {return "alo"}
].length);

// Para contar a quantidade de elementos em um array pode-se usar o método length.

console.log([
    "a",
    {type: "array"},
    () => {return "alo"}
][1].type);

console.log([
    "a",
    {type: "array"},
    () => {return "alo"}
][2]());