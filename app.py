from flask import Flask, render_template, request, redirect, url_for, session

app = Flask(__name__)
app.secret_key = 'minha_chave_secreta'  # Necessário para usar sessões

usuarios = {'admin': '123'}
usuarios['joao'] = '222'

@app.route('/login', methods=['GET', 'POST'])
def login():
    erro = None
    if request.method == 'POST':
        usuario = request.form['usuario']
        senha = request.form['senha']
        if usuario in usuarios and usuarios[usuario] == senha:
            session['usuario'] = usuario
            return redirect(url_for('index'))
        else:
            erro = 'Usuário ou senha incorretos.'
    return render_template('login.html', erro=erro)

@app.route('/logout')
def logout():
    session.pop('usuario', None)
    return redirect(url_for('login'))

@app.route('/')
def index():
    if 'usuario' in session:
        return render_template('index.html', usuario=session['usuario'])
    return redirect(url_for('login'))

@app.route('/voltar')
def volta222():
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)


# ADICIONA O BANCO DE DADOS PARA SALVAR OS USUARIOS
# UTILIZA O SQLALCHMY PARA GERENCIAR O BANCO DE DADOS