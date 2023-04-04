//Arrays


//    indices:     0         1        2
const alunos = ['Cezar', 'juliana', 'Brayan'];

console.log(alunos[0]);//acessando o valor pelo indice
console.log(alunos[1]);//acessando o valor pelo indice
console.log(alunos[2]);//acessando o valor pelo indice

//altear o valor do arrays:
alunos[1] = 'moreira';
console.log(alunos[1]);

//adicionar elementos no arrays:
alunos[3] = 'Cardoso';
console.log(alunos);

//visualizar a quantidade de itens do arrays:
console.log(alunos.length);

//adicionar elementos no arrays :
alunos[alunos.length]= 'Rebeiro';
alunos[alunos.length]= 'Eduardo';
alunos[alunos.length]= 'Diego';
alunos[alunos.length]= 'Gabriel';
console.log(alunos);

//adicionar elementos no inicio do arrays:
alunos.unshift('Fernando');
console.log(alunos);


//adicionar elementos no final do arrays:
alunos.push('neguinha');
console.log(alunos);

//remover do final
alunos.pop();
console.log(alunos);

//salvar o elemento que esta sendo removido em uma vareavel
const removidoDoFinal = alunos.pop();
console.log(removidoDoFinal);

//remove do começo:
alunos.shift();
console.log(alunos);

//salvar o elemento que esta sendo removido em uma vareavel
const removidoDoComeco = alunos.shift();
console.log(removidoDoComeco);

//deleta pelo indice:
delete alunos[1]

