var el = document.createElement('div');

el.classList = "div-criada";

 console.log(el);

var conteiner = document.querySelector('#container');

conteiner.appendChild(el);

const subtitle =document.createElement('h3');
subtitle.innerText = "Olá alunos";

conteiner.append(subtitle);
// conteiner.prepend(subtitle);