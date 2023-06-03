import input from 'readline-sync';

// Acabamos de chegar nos EUA e quando olhamos para o termometro levamos um susto, porque estava 100 graus fahrenheit. Contrua um programa que resolva esse problema.

let fahrenheit = parseFloat(input.question('Qual a temperatura atual? '));
let celsius = ((fahrenheit - 32) * 5) / 9;
console.log(`A temperatura no Brasil estaria ${celsius.toFixed(2)}`);