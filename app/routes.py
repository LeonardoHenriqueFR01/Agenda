from flask import Blueprint, render_template, request, redirect, url_for
from . import db
from .models import Dados_form


main = Blueprint('main', __name__)


# Rota para página principal
@main.route("/")
def home():
    return render_template('index.html')
