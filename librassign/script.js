print("Diga algo")
Audio = r.listen(source)

text = r.recognize_google(audio)

const recognition = new webkitSpeechRecognition();

recognition.lang = "pt-BR";

recognition.onresult = function(event) {
    const text = event.results[0]
    [0].transcript;

    const params = new URLSearchParams({
        text: text,
        tokens: "handtalk",
        app_id: "your_app_id",
        app_secret: "your_app_secret"
    });

    fetch("https://api.handtalk.me/translate?" + params)
    .then(response => response.json())
    .then(data => {
        console.log(data.translation);
    })
    .catch(error => console.error(error));
};

document.getElementById("start-btn").addEventListener("click", function() {
    recognition.start();
});