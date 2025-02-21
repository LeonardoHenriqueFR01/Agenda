from flask_sqlalchemy import SQLAlchemy


# Instancia do SQLAlchemy para o banco de dados
db = SQLAlchemy()


# Define a classe User como um modelo para a tabela de usuários
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True) # Define a chave primaria como um ID único para cada usuário
    name = db.Column(db.String(100), nullable=False) # Define um campo para o nome do usuário
    email = db.Column(db.String(100), unique=True, nullable=False) # Define um campo para o email ele deverá ser único
    password = db.Column(db.String(100), nullable=False) # Define um campo para a senha do usuário

    def __repr__(self):
        return f"user('{self.name}', '({self.email})')"
    