// Função para o menu hamburger
function toggleMenu() {
    document.querySelector(".menu").classList.toggle("active");

}

// Função para voltar para o menu principal
function menu_principal() {
    // Pegando o menu principal
    var menu_principal = document.getElementById('menu-principal')
    
    // Pegando os fumularios de cadastro
    var form_avista = document.getElementById('agenda-avista')
    var form_parcelado = document.getElementById('agenda-parcelado')

    // Desabilitando os furmularios e Habilitando o menu principal
    form_avista.style.display = 'none'
    form_parcelado.style.display = 'none'

    menu_principal.style.display = 'block'

}

// Função para mostrar formulários de cadastro avista
function btn_avista() {
    // Pegando o formulário avista
    var form_avista = document.getElementById('agenda-avista')

    // Pegando o menu pricipal
    var menu_principal = document.getElementById('menu-principal')

    // Desabilitando o menu principal e Habilitando o formulário de cadastro avista
    menu_principal.style.display = 'none'
    form_avista.style.display = 'block' 

}

// Função para mostrar formulários de cadastro parcelado
function btn_financiamento() {
    // Pegando o formulário avista
    var form_parcelado = document.getElementById('agenda-parcelado')

    // Pegando o menu pricipal
    var menu_principal = document.getElementById('menu-principal')

    // Desabilitando o menu principal e Habilitando o formulário de cadastro avista
    menu_principal.style.display = 'none'
    form_parcelado.style.display = 'block' 

}

document.addEventListener("DOMContentLoaded", function () {
    // Pegando o menu principal
    const menuPrincipal = document.getElementById("menu-principal");

    // Pegando todos os formulários disponíveis
    const formularios = document.querySelectorAll("[id^='form-']");

    // Pegando todos os botões que devem ativar os formulários (ajuste os seletores conforme necessário)
    const botoes = document.querySelectorAll("[data-form]");

    botoes.forEach(botao => {
        botao.addEventListener("click", function () {
            // Desabilita o menu principal
            menuPrincipal.style.display = "none";

            // Esconde todos os formulários
            formularios.forEach(form => form.style.display = "none");

            // Obtém o ID do formulário associado ao botão clicado
            const formId = botao.getAttribute("data-form");
            const formularioSelecionado = document.getElementById(formId);

            // Exibe apenas o formulário correspondente
            if (formularioSelecionado) {
                formularioSelecionado.style.display = "block";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuPrincipal = document.getElementById("menu-principal");
    const formularios = document.querySelectorAll(".form-financiamento, .form-aplicacao, .form-valor-futuro, .form-conversor, .form-margem-lucro");

    // Oculta todos os formulários inicialmente
    formularios.forEach(form => form.style.display = "none");

    // Adiciona evento nos botões que abrem os formulários
    document.querySelectorAll("[data-form]").forEach(botao => {
        botao.addEventListener("click", function () {
            const formId = this.getAttribute("data-form");
            const formSelecionado = document.getElementById(formId);

            if (formSelecionado) {
                menuPrincipal.style.display = "none";
                formSelecionado.style.display = "block";
            }
        });
    });

    // Adiciona evento nos botões de voltar
    document.querySelectorAll(".form-financiamento #voltar, .form-aplicacao #voltar, .form-valor-futuro #voltar, .form-conversor #voltar, .form-margem-lucro #voltar").forEach(voltarBtn => {
        voltarBtn.addEventListener("click", function () {
            formularios.forEach(form => form.style.display = "none");
            menuPrincipal.style.display = "block";
        });
    });
});
