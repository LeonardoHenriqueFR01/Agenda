from flask import render_template, request, redirect, url_for
from app import app


# Rota para página principal
@app.route("/")
def home():
    return render_template('index.html')
    