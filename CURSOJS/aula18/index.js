//array

const array = [1,2,3];

array.push(4);
array[0] = 'cezar';
console.log(array);


//objeto:

const pessoa = {
    nome: 'Cezar',
    sobrenome: 'moreira',
    idade:31
};

console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa.idade);


function criaPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Cezar', 'Moreira', 31);
const pessoa2 = criaPessoa('Juliana', 'Moreira', 31);
const pessoa3 = criaPessoa('Brayan', 'Moreira', 31);
const pessoa4 = criaPessoa('Ju', 'Moreira', 26);
const pessoa5 = criaPessoa('Brayudo', 'Moreira', 31);
const pessoa6 = criaPessoa('Cezao', 'Moreira', 31);
console.log(pessoa1.nome, pessoa4.nome, pessoa5.idade, pessoa6.sobrenome);


