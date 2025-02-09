from app import creat_app, db


# Cria a instância do aplicativo Flask chamando a função creat_app()
app = creat_app()

# Garante que o código dentro do bloco seja executado dentro do contexto do aplicativo Flask
with app.app_context():
    db.create_all() # Cria todas as tabelas do banco de dados definidas nos modelos (caso ainda não exista)

# Verifica se o script está sendo executado diretamente (e não importado como módulo)
if __name__ == "__main__":
    app.run(debug=True, port=5000)
