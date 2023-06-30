const cepForm = document.getElementById('cepForm');
const cepInput = document.getElementById('cepInput');
const resultado = document.getElementById('resultado');

// cepForm.addEventListener('submit', function(event) {
//         event.preventDefault();
//         consultaCep();

//     const cep = cepInput.value;

    
//     fetch(`https://viacep.com.br/ws/${cep}/json/`)
//     .then(response => response.json())
//     .then(data => {
//         if (data.erro) {
//             resultado.innerText = 'CEP não encontrado!';
//         } else {
//             resultado.innerText = `Endereço: 
//             ${data.logradouro}, 
//             ${data.bairro}, 
//             ${data.localidade}, 
//             ${data.uf}`;
//         }
//     })
//     .catch(error => {
//         resultado.innerText = 'Ocorreu um erro na consulta!';
//     });
// });

// console.log(resultado.innerText);


const exibirResultado = (objeto) => {
    const resposta = document.querySelector('#resultado');

    resposta.innerHTML = `
    <p><span>Rua:</span> ${objeto.logradouro}</p>
    <p><span>Bairro:</span> ${objeto.bairro}</p>
    <p><span>Cidade:</span> ${objeto.localidade}</p>
    <p><span>Estado:</span> ${objeto.uf}</p>
    `
}

const consultaCep = async () => {
    const cep = document.querySelector('#cepInput');
    const url = `https://viacep.com.br/ws/${cep.value}/json/`

    try {

        const response = await fetch(url);
        const data = await response.json();
        exibirResultado(data);

    } catch (error) {
        console.log(error);
    }
}



cepForm.addEventListener('submit', function(event) {
    event.preventDefault();
    consultaCep();
});
