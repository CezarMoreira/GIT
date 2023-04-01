//funçoes


// function saudacao(nome) {
//     return `bom dia ${nome}!`;
// }

// // saudacao('Cezar');
// // saudacao('juliana');

// const variavel = saudacao('Cezar');
// console.log(variavel);


// function soma(x, y) {
//     const resultado = x + y;
//     return resultado;
// }

//  console.log(soma(10, 10));

// const resposta = soma(2, 6);
// console.log(resposta); 


function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
}


const resposta = soma(2, 6);
console.log(resposta); 

const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(4));
console.log(raiz(16));


//nova maneira de fazer funçoes
const raizNova = (n) => n ** 0.5;

console.log(raizNova(25));
console.log(raizNova(64));
console.log(raizNova(49));
