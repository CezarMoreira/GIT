/*
Primitivos (valores imutaveis)- strings, number, boolean, 
undefined, null (bigint, sybmbol)
*/

let a = 'A';
let b = a; //copia 

console.log(a, b);

a = 'Outra Coisa';
console.log(a, b);

/*
Referencia (multavel)  - array, object, function
*/

let c = [1,2,3];
let d = c; //aponta pro mesmo valor na memoria
let e = [...c];//copia o valor de c
console.log(c, d);

c.push(4);//vai alterar o valor de c e d 
console.log(c, d); 
console.log(e);

d.pop();//vai alterar o valor de c e d
console.log(c, d);

const pessoa = {
    nome: 'Cezar',
    sobrenome: "moreira"
};

const nomeCopia = {...pessoa};//faz uma copia e valor nao é alterado

pessoa.nome = 'Cezaooo';

console.log(pessoa, nomeCopia);




