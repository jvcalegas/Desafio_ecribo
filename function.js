

function somaValores(value) {
    
    let entreValor = parseInt(window.prompt("Digite um valor"));
        var soma = 0;
        var divisores = [];
        for (var i = 1; i<entreValor; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                parseInt(divisores.push(i));
                soma += i;
            }
        }
    return soma;
}

const resultado = somaValores();
console.log(resultado);