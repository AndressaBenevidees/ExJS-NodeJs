import input from 'readline-sync';

// Construa um sistema que o usuário digite um valor e o programa informe se aquele valor é par ou ímpar.

let parImp = parseFloat(input.question('Digite um número: '));
if (parImp % 2 == 0) {
  console.log(`O número digitado é par`);
} else  {
  console.log(`O número digitado é ímpar`);
}



