// Ler dois valores numéricos inteiros e apresentar o resultado da diferença do maior pelo menor valor

const prompt = require("prompt-sync")();

let n1 = parseInt(prompt("Primeiro número: "));
let n2 = parseInt(prompt("Segundo número: "));

let diferenca = Math.abs(n1 - n2);

console.log(`A diferença entre o maior e o menor valor é: ${diferenca}`);
