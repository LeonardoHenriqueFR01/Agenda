# Importações necessárias
from flask import Blueprint, render_template, redirect, url_for, request, flash  # Blueprint para rotas, render_template para templates, redirect e url_for para redirecionamento, request para dados de formulários, flash para mensagens
from werkzeug.security import generate_password_hash, check_password_hash  # Para criptografar e verificar senhas
from flask_login import login_user, logout_user, login_required  # Para gerenciar sessões de usuários
from .models import User  # Importa o modelo de usuário (que você criará em models.py)
from . import db  # Importa a instância do banco de dados

# Cria um Blueprint chamado 'auth'
auth = Blueprint('auth', __name__)

# Rota para login
@auth.route('/login', methods=['GET', 'POST'])  # Aceita métodos GET e POST
def login():
    if request.method == 'POST':  # Se o formulário for enviado
        email = request.form.get('email')  # Obtém o email do formulário
        password = request.form.get('password')  # Obtém a senha do formulário

        # Busca o usuário no banco de dados pelo email
        user = User.query.filter_by(email=email).first()

        # Verifica se o usuário existe e se a senha está correta
        if user and check_password_hash(user.password, password):
            login_user(user)  # Faz o login do usuário
            flash('Login realizado com sucesso!', 'success')  # Exibe uma mensagem de sucesso
            return redirect(url_for('main.profile'))  # Redireciona para a página de perfil
        else:
            flash('Email ou senha incorretos.', 'error')  # Exibe uma mensagem de erro

    # Renderiza o template de login (para método GET ou se o login falhar)
    return render_template('login.html')

# Rota para registro
@auth.route('/register', methods=['GET', 'POST'])  # Aceita métodos GET e POST
def register():
    if request.method == 'POST':  # Se o formulário for enviado
        email = request.form.get('email')  # Obtém o email do formulário
        name = request.form.get('name')  # Obtém o nome do formulário
        password = request.form.get('password')  # Obtém a senha do formulário

        # Verifica se o email já está cadastrado
        user = User.query.filter_by(email=email).first()
        if user:
            flash('Email já cadastrado.', 'error')  # Exibe uma mensagem de erro
            return redirect(url_for('auth.register'))  # Redireciona de volta para o registro

        # Cria um novo usuário com os dados do formulário
        new_user = User(
            email=email,
            name=name,
            password=generate_password_hash(password, method='sha256')  # Criptografa a senha
        )

        # Adiciona o novo usuário ao banco de dados
        db.session.add(new_user)
        db.session.commit()

        flash('Conta criada com sucesso!', 'success')  # Exibe uma mensagem de sucesso
        return redirect(url_for('auth.login'))  # Redireciona para a página de login

    # Renderiza o template de registro (para método GET ou se o registro falhar)
    return render_template('register.html')

# Rota para logout
@auth.route('/logout')
@login_required  # Garante que apenas usuários autenticados possam acessar
def logout():
    logout_user()  # Faz o logout do usuário
    flash('Logout realizado com sucesso.', 'success')  # Exibe uma mensagem de sucesso
    return redirect(url_for('main.index'))  # Redireciona para a página inicial
