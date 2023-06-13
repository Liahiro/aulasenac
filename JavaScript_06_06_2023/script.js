function calcularIMC() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var imc = peso / (altura * altura);
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "Seu IMC é:" + imc.toFixed(2);
}