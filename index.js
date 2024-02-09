// Solicitar ao usuário que insira um dado do tipo texto
var texto = prompt("Digite seu nome:");

// Solicitar ao usuário que insira um dado do tipo numérico
var numero = parseFloat(prompt("Digite o ano em que você nasceu:"));

if (texto && !isNaN(numero)) {
    // Realizar operações matemáticas ou de concatenação
    var resultadoSoma = texto + " " + (numero + 10); // Concatenação do texto com o número + 10
    var resultadoProduto = "O produto do número por 5 é: " + (numero * 5); // Operação de multiplicação do número por 5

    // Mostrar os resultados
    console.log(resultadoSoma);
    console.log(resultadoProduto);
    // Ou
    alert(resultadoSoma);
    alert(resultadoProduto);
} else {
    // Caso algum dado não tenha sido inserido corretamente
    console.log("Por favor, insira um dado do tipo texto e outro do tipo numérico.");
    // Ou
    alert("Por favor, insira um dado do tipo texto e outro do tipo numérico.");
}
