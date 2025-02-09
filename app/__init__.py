from flask import Flask
from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy() # Inicializa o banco de dados, mas ainda não está associado a nenhum aplicativo flask


def creat_app():
    app = Flask(__name__) # Cria a instacia do aplicativo flask

    # Configurações do banco de dados SQLite
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///dados.db' # Define o banco de dados SQLite chamado 'dados.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False # Desativa notificações do SQLALchemy para melhorar a performance

    db.init_app(app) # Associa o banco de dados ao aplicativo flask

    # Importa as rotas
    from .routes import main # Importa o blueprint chamado 'main' do arquivo routes.py
    app.register_blueprint(main) # Registra o blueprint 'main' no aplicativo flask

    return app
