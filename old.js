function nomeCompleto(nome, sobrenome) {
    return nome + " " + sobrenome;
}

function saudar(nome, sobrenome, callback) {

    return "Olá " + callback(nome, sobrenome)

}

function somar(a, b) {
    return a + b;
}

function multiplicar(a, b) {
    return a * b;
}

function calculadora(a, b, acao) {

    return acao(a, b);

}

calculadora(10, 10, function (a, b) { return a / b });

// função expressa
// somente usa quando quiser nao precisa esperar o browser carregar as outra

