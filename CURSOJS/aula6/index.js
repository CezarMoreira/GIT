const nome = 'cezar';
const sobrenome = 'moreira';
const idade = 31;
const peso = 61;
const alturaEmM = 1.61;
let indiceMassaCorporal; //peso / (altura *altura)
let anoNascimento;
indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2023 - idade;

// console.log('${nome} ${ sobrenome } tem ${ idade } anos pesa  ${ peso } KG');
// console.log(' tem  ${ alturaEmMt } de altura e seu IMC é de  ${ imc } ');
// console.log('${ nome } ${ sobrenome } nasceu em ${ anoNascimento }');

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);



// console.log(nome,' ',sobrenome,'tem ', idade, 'pesa ', peso,'KG tem ',altura, 'e seu IMC é '(peso /(altura*altura)))
