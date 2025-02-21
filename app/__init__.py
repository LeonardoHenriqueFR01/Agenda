from flask import Flask
from .models import db


# Função principal para configurar a aplicação
def create_app():
    # Instancia Flask
    app = Flask(__name__)

    # Configurações da aplicação
    app.config.from_mapping(
        SECRET_KEY='dev', # Chave secreta
        SQLALCHEMY_DATABASE_URI='sqlite:///database.db', # URL do banco de dados
        SQLALCHEMY_TRACK_MODIFICATIONS=False # Desabilita notificações de modificações no banco de dados
    )

    # Importação e registro de blueprints
    from .routes import main_bp
    app.register_blueprint(main_bp) # Registra o blueprint principal na aplicação

    db.init_app(app) # Inicía o banco de dados com a aplicação

    # Criando o banco de dados e as tabelas ( apenas se não existirem )
    with app.app_context():
        db.create_all() # Cria todas as tabelas do banco de dados
    
    # Retorna a aplicação já configurada
    return app
