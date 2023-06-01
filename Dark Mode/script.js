function alternarModo() {
    const corpo =  document.body;
    const botaoModo = document.getElementById("modo");
    const imagemModo = botaoModo.querySelector("img");

    if (corpo.classList.contains("claro")) 
    {
        corpo.classList.remove("claro");
        corpo.classList.add("escuro");
        imagemModo.src = "405894.png"; 
        imagemModo.alt = "sol";
    }    else {
        corpo.classList.remove("escuro");
        corpo.classList.add("claro");
        imagemModo.src = "moon_47708.png";
        imagemModo.alt = "lua";
    }
}
