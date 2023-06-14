var a = prompt("valor do primeiro termo:")
var op1 = prompt("digite a op1")
var b = prompt("valor do segundo termo:")
var op2 = prompt("digite a op2")
var c = prompt("valor do terceiro termo:")

var na = parseInt(a)
var nb = parseInt(b)
var nc = parseInt(c)

var delta = (nb*nb)-4*na*nc;
var x1 
var x2

if (delta <0){
    console.log("Não existem raízes reais");
} else { 

    x1 = (-(nb*op1) + Math.sqrt(delta)) / 2*(na);
    x2 = (-(nb) - Math.sqrt(delta)) / 2*(na);

}