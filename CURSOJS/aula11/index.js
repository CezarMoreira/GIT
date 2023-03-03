//strings

//               01234567
let umaString = 'Um texto';


console.log(umaString.indexOf('texto')); //mostra qual indíce começa a palavra
console.log(umaString.indexOf('e', 3)); //mostra qual indíce da letra da palavra procurada
console.log(umaString.lastIndexOf('e')); //mostra qual indíce da letra da palavra de trás para frente
console.log(umaString.lastIndexOf('e', 7)); //mostra qual indíce da letra da palavra de trás para frente
console.log(umaString[6]); //retorna o elemento pela posição do indíce
console.log(umaString.charAt(5)); //retorna o elemento pela posição do indíce
console.log(umaString.concat(' em', ' um',' lindo', ' dia')); //concatenação
console.log(umaString + ' em um lindo dia'); //concatenação
console.log(`${umaString} em um lindo dia`); //concatenação ->melhor forma
console.log(umaString.match(/[a-z]/g));//mostra todas as letras minusculas do texto
console.log(umaString.search(/x/));//retorna o indice da letra procurada
console.log(umaString.replace('Um', 'outra'));//substitui uma palavra por outra
console.log(umaString.length);//tamanho da string


let outraString = 'o rato roeu a roupa do rei de roma';
console.log(outraString.slice(2, 6));//fatia a string
console.log(outraString.slice(-3));//fatia a string de tras para frente
console.log(outraString.slice(-5, -1));//fatia a string de tras para frente
console.log(outraString.split(' '));//removendo os espaços
console.log(outraString.split('r'));//removendo os r
console.log(outraString.split(' ', 3));//removendo 3 espaços
console.log(outraString.toUpperCase());//deixa tudo maiusculo
console.log(outraString.toLocaleLowerCase());//deixa tudo minuscula