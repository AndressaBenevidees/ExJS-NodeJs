import input from 'readline-sync';

// Esse mes você gastou mais do que tinha e vai ter que pegar um emprestimo. Você vai pagar um valor de 20% a mais do que pegou, só que você pode dividir em quantas parcelas quiser. Construa um programa que mostre o valor do emprestimo com o acrescimo de 20% e o valor de cada parcela.

let emprestimo = parseFloat(input.question('Qual será o valor do empréstimo? R$ '));
let juros = (emprestimo * 20) / 100
let emprestimocomJuros = juros + emprestimo
console.log(`O valor do empréstimo com o juros será de R$ ${emprestimocomJuros}`);
let parcelas = parseFloat(input.question('Qual será o número de parcelas? R$ '));
let total = emprestimocomJuros / parcelas
console.log(`O valor total a ser pago de parcelas será de R$ ${total}`);
