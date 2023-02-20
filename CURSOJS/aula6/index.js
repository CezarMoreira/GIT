const nome = 'cezar';
const sobrenome = 'moreira';
const idade = 31;
const peso = 61;
const alturaEmMt = 1.61;
let imc; //peso / (altura *altura)
let anoNascimento;
imc = peso / (alturaEmMt * alturaEmMt);
anoNascimento =  2023 - idade;

console.log(nome, sobrenome,'tem',idade, 'anos, pesa ',peso,'KG')
console.log('tem ',alturaEmMt, 'de altura e seu IMC é de ', imc)
console.log(nome, sobrenome, 'nasceu e', anoNascimento)



// console.log(nome,' ',sobrenome,'tem ', idade, 'pesa ', peso,'KG tem ',altura, 'e seu IMC é '(peso /(altura*altura)))
