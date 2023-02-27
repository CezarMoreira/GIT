/*
exercicio troque os valores:
varA = 'A'; ->'B'
let varB = 'B'; ->'C'
let varC = 'C'; ->'A'


*/

let varA = 'A';//B
let varB = 'B';//C
let varC = 'C';//A


//primeiro modo:
// let varAtemp;

// varAtemp = varA;
// varA = varB;
// varB = varC;
// varC = varAtemp;

// segundo modo mais moderno:

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);