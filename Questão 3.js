// Ler quatro notas de um aluno, calcular a média. Se a média for igual ou superior a 5, exibir mensagem de "Aprovado"; caso contrário, exibir mensagem de "Não Aprovado". Mostrar o valor da média em ambas as situações.
const prompt = require("prompt-sync")();

let nota1 = parseFloat(prompt("1° Nota: "));
let nota2 = parseFloat(prompt("2° Nota: "));
let nota3 = parseFloat(prompt("3° Nota: "));
let nota4 = parseFloat(prompt("4° Nota: "));

let media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 5) {
    console.log(`A média do aluno é ${media}. O aluno foi aprovado!`);
} else {
    console.log(`A média do aluno é ${media}. O aluno não foi aprovado.`);
}
