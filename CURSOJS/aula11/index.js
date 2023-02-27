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
