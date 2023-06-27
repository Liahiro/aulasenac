var el = document.createElement('div');

el.classList = "div-criada";

 console.log(el);

var conteiner = document.querySelector('#container');

conteiner.appendChild(el);

const subtitle =document.createElement('h3');
subtitle.innerText = "Olá alunos";

conteiner.append(subtitle);
// conteiner.prepend(subtitle);
conteiner.prepend(subtitle);

var el2 = document.createElement('div');
el2.classList = "div-berfore"

var el3 = document.querySelector('#conteiner .div-criada');

console.log(el3);

conteiner.insertBefore(el2, el3);