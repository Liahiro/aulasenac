import speech_recognition as sr from pysign import Signer

r = sr.Recognizer()

with sr.Microphone() as source:
    print("Digite algo:")
    audio = r.listen(source)

    text = r.recognize_google(audio)

    signer = Signer()

    signs = signer.translate(text)

    print(signs)