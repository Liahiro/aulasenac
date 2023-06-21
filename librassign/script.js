const traducao = {
    a: 'A',
    b: 'B',
    c: 'C',
    d: 'D',
    e: 'E',
    f: 'F',
    g: 'G',
    h: 'H',
    i: 'I',
    j: 'J',
    k: 'K',
    l: 'L',
    m: 'M',
    n: 'N',
    o: 'O',
    p: 'P',
    q: 'Q',
    r: 'R',
    s: 'S',
    t: 'T',
    u: 'U',
    v: 'V',
    w: 'W',
    x: 'X',
    y: 'Y',
    z: 'Z',
    '!': '!',
    '?': '?',
    '.': '.'
}

var text = document.querySelector("#texto-traduzido")

var btn = document.querySelector("#btn-traduzir")

// var text = texto.nodeValue

// var res = document.querySelector(".resultado p")

function traduzirTexto(texto) {
    let resultado = '';
    for (let i = 0; i < texto.lenght; i++) {
        if (traducao[texto[i].toLowerCase()]) {
            resultado += traducao[texto[i].toLowerCase()] + '';
        } else {
            resultado += texto[i];
        }
    }

    console.log(resultado);
//     console.log("1");

// text.textContent = resultado

// return resultado;
}

btn.addEventListener('click', traduzirTexto)

// traduzirTexto(texto.nodeValue)

