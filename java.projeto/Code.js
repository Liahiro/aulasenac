const quotes = [
    "Aúnica maneira de fazer um ótimo trabalho é amar o que você faz. - Steve Jobs",
    "Eu não falhei. Apenas encontrei 10.000 maneiras que não funcionam. - Thomas Edison",
    "Se você não gosta de algo, mude. Se não pode mudar, mude sua atitude. - Maya Angelou",
    "Acredite que você já está no meio do caminho. - Theodore Roosevelt",
    "Eu tenho um sonho. - Martin Luther King Jr.",
    "Você perde 100% das chances que não tenta. - Wayne Gretzky",
    "Creio no riso e nas lágrimas como antídotos contra ódio e o terror - Charles Chapling",
    "Seja como for o que penses, creio que é melhor dizê-lo com boas palavras - Willian Shakespeare",
    "Creio que tenho prova suficiente de que falo a verdade: a pobreza - Sócrates",
    "Nada se emenda bem nos livros confusos, mas tudo se pode meter nos livros omissios - Machado de Assis",
    "Você pode imaginar com é terrível quando você tem tudo e você ainda está desesperadamente só? Isso é terrível para além das palavras - Freddie Mercury"
    ];

    const randomQuote = () => {
        let randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes [randomIndex];
    }

    function ExibirCitação() {
        let citaçãoElemente = document.getElementById("citação");
        citaçãoElemente.innerHTML = randomQuote();
    }