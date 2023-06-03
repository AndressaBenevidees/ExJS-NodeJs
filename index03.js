import input from 'readline-sync';

// Faça um programinha que o usuário digita o ano de nascimento e o programa mostre a idade do usuário e uma mensagem informando se ele já atingiu a maioridade.

console.log('Verificador de idade');
  let value = parseInt(input.question('Qual o ano do seu nascimento? '));
  let dataAtual = new Date();
  let anoAtual = dataAtual.getFullYear();
  let idade = anoAtual - value

  if (idade < 16) {
    console.log(`Você tem ${idade} anos. Você é menor de idade`);
  } else if (idade >= 18) {
    console.log(`Você tem ${idade} anos. Você é maior de idade!`);
  }

