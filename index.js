// // Solicitar ao usuário que insira um dado do tipo texto
// var texto = prompt("Digite seu nome:");

// // Solicitar ao usuário que insira um dado do tipo numérico
// var numero = parseFloat(prompt("Digite o ano em que você nasceu:"));

// if (texto && !isNaN(numero)) {
//     // Realizar operações matemáticas ou de concatenação
//     var resultadoSoma = texto + " " + (numero + 10); // Concatenação do texto com o número + 10
//     var resultadoProduto = "O produto do número por 5 é: " + (numero * 5); // Operação de multiplicação do número por 5

//     // Mostrar os resultados
//     console.log(resultadoSoma);
//     console.log(resultadoProduto);
//     // Ou
//     alert(resultadoSoma);
//     alert(resultadoProduto);
// } else {
//     // Caso algum dado não tenha sido inserido corretamente
//     console.log("Por favor, insira um dado do tipo texto e outro do tipo numérico.");
//     // Ou
//     alert("Por favor, insira um dado do tipo texto e outro do tipo numérico.");
// }



// PRÁTICA AULA 04

//EXEMPLO 1
// Função para calcular o ICMS
function calcularICMS(precoCusto) {
    // Definindo a taxa de ICMS (exemplo: 18%)
    const taxaICMS = 0.18;

    // Calculando o valor do ICMS
    const icms = precoCusto * taxaICMS;

    // Calculando o preço final com ICMS
    const precoFinal = precoCusto + icms;

    // Retornando o preço final
    return precoFinal;
}

// Função principal para realizar o cálculo do ICMS
function calcularPrecoComICMS() {
    // Passo 1: Inserir preço de custo
    const precoCusto = parseFloat(prompt("Digite o preço de custo:"));

    // Passo 2: Calcular ICMS
    const precoComICMS = calcularICMS(precoCusto);

    // Passo 3: Mostrar preço calculado
    alert(`O preço com ICMS é: R$ ${precoComICMS.toFixed(2)}`);
}

// Chamando a função principal
calcularPrecoComICMS();

//EXEMPLO 2
// Função para determinar se dois números são múltiplos
function verificarMultiplos(num1, num2) {
    // Verificando se um número é múltiplo do outro
    if (num1 % num2 === 0 || num2 % num1 === 0) {
        return true;
    } else {
        return false;
    }
}

// Função principal para verificar múltiplos
function verificarMultiplosPrincipal() {
    // Passo 1: Inserir números a serem verificados
    const num1 = parseInt(prompt("Digite o primeiro número:"));
    const num2 = parseInt(prompt("Digite o segundo número:"));

    // Passo 2: Verificar se um é múltiplo do outro
    const saoMultiplos = verificarMultiplos(num1, num2);

    // Passo 3: Mostrar resultado
    if (saoMultiplos) {
        alert("Os números são múltiplos um do outro.");
    } else {
        alert("Os números não são múltiplos um do outro.");
    }
}

// Chamando a função principal
verificarMultiplosPrincipal();


//EXEMPLO 3
function calcularMedia() {
    // Passo 1: Inserir o primeiro número
    const num1 = parseFloat(prompt("Digite o primeiro número:"));

    // Passo 2: Inserir o segundo número
    const num2 = parseFloat(prompt("Digite o segundo número:"));

    // Passo 3: Calcular a média dos dois números
    const media = (num1 + num2) / 2;

    // Passo 4: Exibir o resultado da média
    console.log(`A média dos números ${num1} e ${num2} é: ${media}`);
}

// Chamando a função para calcular a média
calcularMedia();
