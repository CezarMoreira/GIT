const numeros = Number(prompt('Digite um numero:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');


numeroTitulo.innerHTML = numeros;
texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: ${numeros ** 0.5}.</p>`;
texto.innerHTML += `<p>${numeros} é inteiro: ${Number.isInterger(numeros)}.</p>`;
texto.innerHTML += `<p>é NAN: ${Number.isNaN(numeros)}.</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numeros)}.</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numeros)}.</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numeros.toFixed(2)}.</p>`;

