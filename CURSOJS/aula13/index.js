let num1 = 1;
let num2 = 2;

console.log(num1.toString() + num2);//transforma o numero em string temporariamente.

num1 = num1.toString();//tranforma em string
console.log(typeof(num1));//mostra o tipo de dado

let num3 = 1500;
console.log(num3.toString(2));//retorna em forma de numero binario.

let num4 = 40.5565656853255;
console.log(num4.toFixed(2));//arredonda os numeros decimais.
console.log(Number.isInteger(num4));//retorna True se o numero for inteiro.

