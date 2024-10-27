//Efetuar a leitura de três valores (variáveis A, B e C) e apresentá-los dispostos em ordem crescente.
const prompt = require("prompt-sync")();

let a = parseInt(prompt("Primeiro número: "));
let b = parseInt(prompt("Segundo número: "));
let c = parseInt(prompt("Terceiro número: "));

let numeros = [a, b, c];
numeros.sort((x, y) => x - y);

console.log(`Os números em ordem crescente são: ${numeros.join(", ")}`);
