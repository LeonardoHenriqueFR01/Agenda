from . import db # Importa a instância do SQLALchemy do arquivo __init__.py


# Define a classe Dados_form, que representa uma tabela no banco de dados
class Dados_form(db.Model):
    # Define a coluna 'id' como chave primária do tipo Integer (número inteiro)
    id = db.Column(db.Integer, primary_key=True)

    # Define a coluna 'title' como uma string de até 200 caracteres e que não pode ser nula
    title = db.Column(db.String(200), nullable=False)

    # Define a coluna 'completed' como um valor booleano, com valor padrão False (não concluida)
    completed = db.Column(db.Boolean, default=False)

    # Método especial que retorna uma representação em string do objeto
    def __repr__(self):
        return f'<Dados {self.id} - {self.title}>'
    

    # Metodo para tranformar o objeto em um dicionário, útil para APIs e JSON reponses
    def as_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'completed': self.completed
        }
    