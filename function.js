
//função onde tudo acontece. :)

function somaValores(value) {
    
    // Variavel que pede o valor já convertendo em inteiro.
    
    let entreValor = parseInt(window.prompt("Digite um valor"));
    // variavel da soma que terá valor inicial igual a 0
    
        var soma = 0;
    // Lista(array) onde ficará armazenados os números divisiveis por 3 ou 5.
    
        var divisores = [];
    // Laço de repetição que enquanto o contador i for menor que o numero digitado, roda o laço
    
        for (var i = 1; i<entreValor; i++) {
            
            // Condição para puxar os números divisíveis por 3 ou 5, adicionar na lista e fazer a soma.
            if (i % 3 == 0 || i % 5 == 0) {
                parseInt(divisores.push(i));
                soma += i;
            }
        }
    // Quando a função rodar, retorna a soma.
    
    return soma;
}

// Defino uma constante resultado e igualo à função acima.

const resultado = somaValores();

// Para aparecer na tela o resultado da soma. :)
document.write(resultado);

// Obrigado! ;)
