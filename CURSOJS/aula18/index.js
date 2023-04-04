//array

const array = [1, 2, 3];

array.push(5);//adiciona o valor no vinal do array
array[0] = 'cezar';//adiciona o nome no indice zero
console.log(array);


//objeto:

const pessoa = {
    nome: 'Cezar',
    sobrenome: 'moreira',
    idade: 31
};

console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa.idade);


function criaPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa('Cezar', 'Moreira', 31);
const pessoa2 = criaPessoa('Juliana', 'Moreira', 31);
const pessoa3 = criaPessoa('Brayan', 'Moreira', 31);
const pessoa4 = criaPessoa('Ju', 'Moreira', 26);
const pessoa5 = criaPessoa('Brayudo', 'Moreira', 31);
const pessoa6 = criaPessoa('Cezao', 'Moreira', 31);
console.log(pessoa1.nome, pessoa4.nome, pessoa5.idade, pessoa6.sobrenome);


const pessoa7 = {
    nome: 'Cezar',
    sobrenome: 'Moreira',
    idade: 25,

    Fala() {
        console.log(`${this.nome} ${this.sobrenome} está faland oi , a minha idade é ${this.idade}`);
    },
    incrementaIdades() {
        this.idade++;
    },
};

pessoa7.Fala();
pessoa7.incrementaIdades();
pessoa7.Fala();
pessoa7.incrementaIdades();
pessoa7.Fala();
pessoa7.incrementaIdades();
pessoa7.Fala();
pessoa7.incrementaIdades();
pessoa7.Fala();