// alert('oi');

// function meuEscopo () {
//     const form= document.querySelector('.formulario');  //selecionando a classe formulario

//     form.onsubmit = function (evento) {
//         evento.preventDefault();
//         alert(1);
//     };





function meuEscopo() {
    const form = document.querySelector('.form');  //selecionando a classe formulario
    const resultado = document.querySelector('.resultado'); //seleciona a classe resultado
    
    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();  //desativa o carregamento da pagina 

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome : nome.value,
            sobrenome : sobrenome.value,
            peso : peso.value,
            altura : altura.value,
        });
        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;

    }

    
    form.addEventListener('submit', recebeEventoForm);

}

meuEscopo();