// Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 7. Se o valor da média for menor que 7, solicitar a nota de exame, somar com o valor da média e obter nova média. Se a nova média for maior ou igual a 5, apresentar uma mensagem dizendo que o aluno foi aprovado em exame. Se o aluno não foi aprovado, indicar uma mensagem informando esta condição. Apresentar com as mensagens o valor da média do aluno, para qualquer condição
// Importar a biblioteca prompt-sync
const prompt = require("prompt-sync")();

let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));
let nota3 = parseFloat(prompt("Digite a terceira nota: "));
let nota4 = parseFloat(prompt("Digite a quarta nota: "));

let media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 7) {
    console.log(`A média do aluno é ${media}. O aluno foi aprovado!`);
} else {
    let notaExame = parseFloat(prompt("Digite a nota do exame: "));
    let novaMedia = (media + notaExame) / 2;
    if (novaMedia >= 5) {
        console.log(`A média final do aluno é ${novaMedia}. O aluno foi aprovado em exame!`);
    } else {
        console.log(`A média final do aluno é ${novaMedia}. O aluno não foi aprovado.`);
    }
}
