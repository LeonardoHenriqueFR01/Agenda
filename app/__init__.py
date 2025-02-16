from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager


db = SQLAlchemy() # Intância do SQLALCHEMY para interagir com o banco de dados
login_manager = LoginManager() # Intância do LoginManager para gerenciar autenticação


# Função principal para criar e gerenciar a aplicação flask
def create_app():
    app = Flask(__name__) # Cria uma Instância do Flask

    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///banco.db' # URL do banco de dados
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    
    # Inicializa as extenções com o aplicativo Flask
    db.init_app(app) # Inicializa o banco de dados com o app
    login_manager.init_app(app) # Inicializa o LoginManager com o app

    login_manager.login_view = 'routes.login' # "routes.login" é o nome da rota de login

    # Registra os blueprints (módulos que organiza as rotas e funcionalidades do app)
    from .routes import routes as auth_blueprint # Importa o blueprint de autenticação
    app.register_blueprint(auth_blueprint) # Registra o blueprint de autenticação do app

    from .routes import main as main_blueprint # Importa o blueprint principal
    app.register_blueprint(main_blueprint) # Registra o blueprint principal no app

    # Cria as tabelas do banco de dados (se elas não existirem)
    with app.app_context():
        db.create_all() # Cria todas as tabelas definidas nos modelos

    # Retorna o aplicativo Flask configurado
    return app
