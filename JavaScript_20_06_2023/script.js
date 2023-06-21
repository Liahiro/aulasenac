// var diaSemana = 3;
// var mensagem = '';

// switch (diaSemana) {
//     case 1:
//         mensagem = "Domingo";
//         break;
//     case 2: 
//         mensagem = "Segunda-feira";
//         break;
//     case 3: 
//         mensagem = "Terça-feira";
//         break;
//     case 4: 
//         mensagem = "Quarta-feira";
//         break;
//    case 5: 
//         mensagem = "Quinta-feira";
//         break;
//     case 6: 
//         mensagem = "Sexta-feira";
//         break;
//     case 7: 
//         mensagem = "Sábado-feira";
//         break;
//     default: 
//         mensagem = "Valor inválido";
//         break;
// }

// console.log(mensagem)

function fibonacci(num) {
    var a = 0, b = 1, temp;
    var result = [];

    while (num>=0) {
        result.push(a);
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }
   return result;
}

console.log(fibonacci(10));