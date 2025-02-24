document.addEventListener("DOMContentLoaded", function () {
    // Função para verificar se um valor é válido
    function isValid(value) {
        return !isNaN(value) && value > 0;
    }

    // Função para calcular a prestação fixa
    function calcularPrestacao(P, i, n) {
        if (i === 0) return P / n; // Evitar divisão por zero se a taxa de juros for 0
        return (P * i) / (1 - Math.pow(1 + i, -n));
    }

    // Função para calcular o valor futuro da aplicação com juros compostos
    function calcularValorFuturoAplicacao(P, A, i, n) {
        return P * Math.pow(1 + i, n) + A * ((Math.pow(1 + i, n) - 1) / i);
    }

    // Função para calcular o valor futuro de um investimento com taxa fixa
    function calcularValorFuturo(P, i, n) {
        return P * Math.pow(1 + i, n);
    }

    // Função de Financiamento
    function calcularFinanciamento() {
        let P = parseFloat(document.getElementById("valorFinanciado").value);
        let i = parseFloat(document.getElementById("taxaJuros").value) / 100;
        let n = parseInt(document.getElementById("prazo").value);

        if (!isValid(P) || !isValid(i) || !isValid(n)) {
            document.getElementById("resultadoFinanciamento").innerText = "Por favor, preencha todos os campos corretamente.";
            return;
        }

        let PMT = calcularPrestacao(P, i, n);
        document.getElementById('resultadoFinanciamento').style.display = "flex"
        document.getElementById("resultadoFinanciamento").innerHTML = `Valor da Prestação: R$ ${PMT.toFixed(2)}`;
    }

    // Função de Aplicação com Juros Compostos
    function calcularAplicacao() {
        let P = parseFloat(document.getElementById("valorInicial").value);
        let A = parseFloat(document.getElementById("aporteMensal").value);
        let i = parseFloat(document.getElementById("taxaInvestimento").value) / 100;
        let n = parseInt(document.getElementById("tempoInvestimento").value);

        if (!isValid(P) || !isValid(A) || !isValid(i) || !isValid(n)) {
            document.getElementById("resultadoAplicacao").innerText = "Por favor, preencha todos os campos corretamente.";
            return;
        }

        let FV = calcularValorFuturoAplicacao(P, A, i, n);
        document.getElementById('resultadoAplicacao').style.display = "flex"
        document.getElementById("resultadoAplicacao").innerText = `Valor Futuro da Aplicação: R$ ${FV.toFixed(2)}`;
    }

    // Função de Conversão de Moeda
    function converterMoeda() {
        let valor = parseFloat(document.getElementById("valorConverter").value);
        let moedaOrigem = document.getElementById("moedaOrigem").value;
        let moedaDestino = document.getElementById("moedaDestino").value;

        if (!isValid(valor)) {
            document.getElementById("resultadoConversor").innerText = "Por favor, insira um valor válido para conversão.";
            return;
        }

        let taxas = {
            "USD-BRL": 5.10, "BRL-USD": 0.20,
            "EUR-BRL": 5.50, "BRL-EUR": 0.18,
            "USD-EUR": 0.91, "EUR-USD": 1.10
        };

        let taxa = taxas[`${moedaOrigem}-${moedaDestino}`] || 1;
        let resultado = valor * taxa;

        document.getElementById('resultadoConversor').style.display = "flex"
        document.getElementById("resultadoConversor").innerText = `Valor convertido: ${moedaDestino} ${resultado.toFixed(2)}`;
    }

    // Função de Margem de Lucro
    function calcularMargemLucro() {
        let custo = parseFloat(document.getElementById("custoProduto").value);
        let venda = parseFloat(document.getElementById("precoVenda").value);

        if (!isValid(custo) || !isValid(venda)) {
            document.getElementById("resultadoMargemLucro").innerText = "Por favor, preencha todos os campos corretamente.";
            return;
        }

        let margem = ((venda - custo) / venda) * 100;
        document.getElementById('resultadoMargemLucro').style.display = "flex"
        document.getElementById("resultadoMargemLucro").innerText = `Margem de Lucro: ${margem.toFixed(2)}%`;
    }

    // Função de Valor Futuro
    function calcularValorFuturo() {
        let P = parseFloat(document.getElementById("capitalInicial").value);
        let i = parseFloat(document.getElementById("taxaFixa").value) / 100;
        let n = parseInt(document.getElementById("tempo").value);

        if (!isValid(P) || !isValid(i) || !isValid(n)) {
            document.getElementById("resultadoValorFuturo").innerText = "Por favor, preencha todos os campos corretamente.";
            return;
        }

        let VF = calcularValorFuturo(P, i, n);
        document.getElementById('resultadoValorFuturo').style.display = "flex"
        document.getElementById("resultadoValorFuturo").innerText = `Valor Futuro: R$ ${VF.toFixed(2)}`;
        
    }

    // Associando os botões a suas respectivas funções
    document.getElementById("btnFinanciamento").onclick = calcularFinanciamento;
    document.getElementById("btnAplicacao").onclick = calcularAplicacao;
    document.getElementById("btnConversor").onclick = converterMoeda;
    document.getElementById("btnMargemLucro").onclick = calcularMargemLucro;
    document.getElementById("btnValorFuturo").onclick = calcularValorFuturo;
});
