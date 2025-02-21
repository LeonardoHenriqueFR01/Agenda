from flask import render_template, request, redirect, url_for, session, Blueprint
from .models import User, db


# Instancia para o Blueprint
main_bp = Blueprint('main_bp', __name__)

# Rota para página principal
@main_bp.route('/')
def home():
    return render_template('index.html')


# Rota para página apos fazer cadastro ou login
@main_bp.route('/agenda')
def agenda():
    name = session.get('name') # Obtem o nome da sessão
    return render_template('agenda.html', name=name) # Renderiza a página HTML + a variável "name"


# Rota para fazer cadastro
@main_bp.route('/cadastro', methods=['POST', 'GET'])
def cadastro():
    error_message = None # Variável para armazenar mensagem de error

    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        password = request.form.get('password')

        # Verifica se o email já existe
        user_exists = User.query.filter_by(email=email).first()
        if user_exists:
            error_message = "Este email já está registrado!"
            return render_template('index.html', error=error_message)

        # Criação de um novo usuário e adição ao banco de dados
        user = User(name=name, email=email, password=password)

        # Adciona o usuário ao banco de dados
        db.session.add(user)
        db.session.commit()

        # Armazena os dados na sessão
        session['name'] = name
        session['email'] = email

        # Redireciona para página de agenda
        return redirect(url_for('main_bp.agenda', name=name))
    
    return render_template('index.html')


# Rota para fazer login
@main_bp.route('/login', methods=['POST', 'GET'])
def login():
    error_message = None # Variável para armazenar mensagem de error    

    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')

        # Verifica se o usuário existe no banco de dados
        user = User.query.filter_by(email=email).first()

        # Verifica se a senha corresponde
        if user and user.password == password:
            # Armazena os dados na sessão
            session['name'] = user.name
            session['email'] = user.email

            # Redireciona para página de agenda
            return redirect(url_for('main_bp.agenda', name=user.name))
        else:
            # Caso as credenciais sejam inválidas
            error_message = 'Senha ou email incorretos!'
            return render_template('index.html', error=error_message)
    
    return render_template('index.html')
