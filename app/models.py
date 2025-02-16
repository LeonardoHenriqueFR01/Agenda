# Importações necessárias
from . import db  # Importa a instância do banco de dados (definida no __init__.py)
from flask_login import UserMixin  # Fornece métodos padrão para o Flask-Login trabalhar com usuários
from werkzeug.security import generate_password_hash, check_password_hash  # Para criptografar e verificar senhas

# Modelo de usuário
class User(db.Model, UserMixin):  # Herda de db.Model (SQLAlchemy) e UserMixin (Flask-Login)
    # Colunas da tabela de usuários
    id = db.Column(db.Integer, primary_key=True)  # ID único do usuário (chave primária)
    email = db.Column(db.String(100), unique=True, nullable=False)  # Email do usuário (único e obrigatório)
    name = db.Column(db.String(100), nullable=False)  # Nome do usuário (obrigatório)
    password = db.Column(db.String(200), nullable=False)  # Senha criptografada do usuário (obrigatória)

    # Método para definir a senha (criptografa a senha antes de armazenar)
    def set_password(self, password):
        self.password = generate_password_hash(password, method='sha256')

    # Método para verificar a senha (compara a senha fornecida com a senha criptografada)
    def check_password(self, password):
        return check_password_hash(self.password, password)

    # Método especial para representar o objeto como uma string (útil para debugging)
    def __repr__(self):
        return f'<User {self.email}>'
    