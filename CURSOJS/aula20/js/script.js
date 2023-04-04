function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');//seleciona a div com classe resultado

    const pessoas = [];


    //forma antiga de fazer: 
    //form.onsubmit = function (evento) {
    //     evento.preventDefault();//nao atualiza a pagina
    //     alert(1);
    //     console.log('foi enviado');
    // };

    //forma moderna de fazer:
    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.Value,
            sobrenome: sobrenome.Value,
            peso: peso.Value,
            altura: altura.Value,
        });
        console.log(pessoas);

        resultado.innerHTML += `<p> ${nome.Value} ${sobrenome.Value} ${peso.Value} ${altura.Value} </p>`
    }
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();