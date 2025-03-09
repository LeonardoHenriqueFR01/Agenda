
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

// Função para mostrar senha no formulário
function togglePassword(inputId, button) {
    let passwordInput = document.getElementById(inputId);
    
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        button.textContent = "🔓"; // Ícone de cadeado aberto
    } else {
        passwordInput.type = "password";
        button.textContent = "🔒"; // Ícone de cadeado fechado
    }
}

// Função para chamar o spin form cadastro
function get_cadastro() {
    // Pegando variáveis do formulário
    let name = document.getElementById('name').value.trim()
    let email = document.getElementById('email').value.trim()
    let password = document.getElementById('cadastro-password').value.trim()

    // Pegando o button e o spin
    let btn_cadastro = document.getElementById('btn_cadastro')
    let spin = document.getElementById('load_cadastro')

    if (name.length < 3) {
        alert('O nome deve ter no mínimo 3 caracteres!')
        return;
    }

    if (email.length < 12) {
        alert('O email deve ter no mínimo 12 caracteres!')
        return;
    }

    if (password.length < 8) {
        alert('A senha deve ter no mínimo 8 caracteres!')
        return;
    }

    // Caso nenhuma das opções a cima aconteça
    btn_cadastro.style.display = 'none'
    spin.style.display = 'block'

}

// Função para chamar o spin form login
function get_login() {
    // Pegando variáveis do formulário
    let email = document.getElementById('email_login').value.trim()
    let password = document.getElementById('login-password').value.trim()

    // Pegando o button e o spin
    let btn_login = document.getElementById('btn_login')
    let spin = document.getElementById('load_login')

    if (email.length < 12) {
        alert('O email deve ter no mínimo 12 caracteres!')
        return;
    }

    if (password.length < 8) {
        alert('A senha deve ter no mínimo 8 caracteres!')
        return;
    }

    // Caso nenhuma das opções a cima aconteça
    btn_login.style.display = 'none'
    spin.style.display = 'block'

}
