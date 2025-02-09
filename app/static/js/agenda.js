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
