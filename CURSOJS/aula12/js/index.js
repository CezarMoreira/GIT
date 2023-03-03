//exercicos

const nome = prompt('digite seu nome completo: ');
const qtdeDeLetras = nome.length;
const segundaLetraNome = nome.slice(1, 2);
const primeiroIndiceDoNome = nome.search();
// const ultimoIndiceDoNome = 




document.body.innerHTML += `O seu nome é: ${nome}<br />`;

document.body.innerHTML += `Seu nome tem ${qtdeDeLetras} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${segundaLetraNome}<br />`;
document.body.innerHTML += `Qual o primeiro índice da letra LETRA no seu nome? ${primeiroIndiceDoNome}<br />`;
document.body.innerHTML += `Qual o último índice da letra LETRA no seu nome? ______<br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ______<br />`;
document.body.innerHTML += `As palavras do seu nome são: ______<br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ______<br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ______<br />`;