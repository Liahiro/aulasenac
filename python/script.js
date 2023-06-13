let portas = new Array(100).fill(false);
for (let i = 0; i <portas.length; i++) {
    portas[i] = true;
}

for (let i = 2; i <= portas.length; i++) {
    for (let j = i - 1; j < portas.length; j +=i) {
        portas[j] = !portas[j];
    }
}

let numPortasFechadas = 0;
for (let i =0; i < portas.length; i++) {
    if(!portas[i]) {
        numPortasFechadas++;
    }
}

console.log("número de portas fechadas no final:" +numPortasFechadas);