// Pegando o conteúdo do menu principal é da calculadora
var menu = document.getElementById('menu-principal')
var cal = document.getElementById('container-calculadora')


// Função para halitar a calculadora
function calculadora() {
    // Desabulitando o menu principal
    menu.style.display = 'none'
    // Habilitando a calculadora
    cal.style.display = 'flex'
}

// Função para voltar para o menu principal é dasabilitar a calculadora
function menu_view() {
    // Desabilita a calculadora
    cal.style.display = 'none'
    // Habilita o menu principal
    menu.style.display = 'block'
}

// Obtém o elemento da tela onde a expressão e o resultado serão exibidos
let tela = document.getElementById("tela");

// Variável que armazenará a expressão matemática digitada
let expressao = "";

/**
 * Função para adicionar um número à expressão
 * @param {string} num - O número a ser adicionado
 */
function adicionarNumero(num) {
    expressao += num;  // Concatena o número à expressão atual
    atualizarTela();    // Atualiza a tela para exibir a nova expressão
}

/**
 * Função para adicionar um operador matemático (+, -, *, /) à expressão
 * @param {string} op - O operador a ser adicionado
 */
function adicionarOperador(op) {
    // Verifica se a expressão não está vazia e se o último caractere não é um operador
    if (expressao !== "" && !"+-*/".includes(expressao.slice(-1))) {
        expressao += op;  // Adiciona o operador à expressão
        atualizarTela();   // Atualiza a tela para exibir a nova expressão
    }
}

/**
 * Função para limpar a tela e redefinir a expressão
 */
function limparTela() {
    expressao = "";   // Zera a expressão
    atualizarTela();  // Atualiza a tela para refletir a mudança
}

/**
 * Função para calcular o resultado da expressão matemática
 */
function calcularResultado() {
    try {
        expressao = eval(expressao);  // Avalia a expressão matemática e calcula o resultado
        atualizarTela();              // Atualiza a tela com o resultado
    } catch {
        expressao = "Erro";  // Se houver erro na expressão, exibe "Erro" na tela
        atualizarTela();
    }
}

/**
 * Função para atualizar a tela com a expressão ou o resultado atual
 */
function atualizarTela() {
    tela.innerText = expressao;  // Define o conteúdo da tela como a expressão atual
}
