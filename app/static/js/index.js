
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
