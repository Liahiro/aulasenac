const element = document.querySelector('h3');
console.log(element.parentNode);
console.log(element.parentElement);

// elementos filhos
const elDaddy = document.querySelector('div');
console.log(elDaddy.childNodes);
console.log(elDaddy.children);
console.log(elDaddy.firstElemenetChild);

// inserir elemento no body
var novoParagrafo = document.createElement('p');
var texto = document.createTextNode('Este é o conteúdo do parágrafo');
novoParagrafo.appendChild(texto);

console.log(novoParagrafo);

// capturar o body
var body = document.querySelector('body');

body.appendChild(novoParagrafo);

console.log(novoParagrafo)

var div = document.querySelector('#conteiner');

var el = document.createElement("span");
el.appendChild(document.createTextNode("texto span"));

div.appendChild(el);    

console.log(div);    