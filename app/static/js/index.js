
// Pega a interface de cadastro
var cadastro = document.getElementById('cadastro')

// Pega a interface de login
var login = document.getElementById('login')


function form_login() {

    cadastro.style.display = 'none'
    login.style.display = 'flex'

}

function form_cadastro() {

    cadastro.style.display = 'flex'
    login.style.display = 'none'

}