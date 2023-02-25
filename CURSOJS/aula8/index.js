/**
 * Operadores Aritméticos
 * +Adição / Concatenação
 *  - / *
 *  
 * 
 * vai ser realizado a ordem da opração na seguinte ordem: () ** * / + -
 *     
 * potenciação **
 * resto da divisão %
 * 
 * 
 * */



const num1 = '1';
const num2 = 2;
const num3 = 4;
const num4 = 4;

//Concatenação
console.log(num1 + num2);

//Adição
console.log(num3 + num4);

//Multiplicação  *
console.log(num3 * num4);

//divisão  /
console.log(num3 / num4);

//Subtração -
console.log(num3 - num4)

//Potenciação **
console.log(num3 ** num4)

//Resto da divisão
console.log(num3 % num4)


//incremento ++
let contador = 1;
contador++;  //o valor de mais 1
contador++;
console.log('contador', contador);

//incremento ++
let contador2 = 1;
console.log(++contador2);

//Decremento --
let contador3 = 10;
console.log(--contador3);

//incremento ++
const passo = 50;
let contador4 = 0;
contador4 = contador4 + passo;
console.log(contador4)

//incremento ++
const passo2 = 30;
let contador5 = 0;
contador5 += passo2;
contador5 += passo2;
contador5 += passo2;
contador5 += passo2;

console.log(contador5);


let contador6 = 2;
contador6 *= 2;
contador6 *= 2;
contador6 *= 2;
contador6 *= 2;
console.log(contador6);

let contador7 = 2;
contador7 **= 10;
console.log(contador7);


// convertendo string em numero inteiro
const num5 = parseInt("10");
console.log(typeof num5);


// convertendo string em numero float
const num6 = parseFloat("10.2");
console.log(typeof num6);

//
// convertendo string em numero
const num7 = Number("10.9");
console.log(typeof num7);

//potenciação
const num8 = 20;
const num9 = 3;
console.log(num8 ** num9);

//resto da divisão
console.log(num8 % num9);

//auterando a ordem de execução
console.log((num8 + num7) * num8);


