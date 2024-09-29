from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

# Página principal para exibir o formulário
@app.route('/')
def index():
    return render_template('cadastro.html')

# Rota que recebe os dados via POST e processa o cadastro do voo
@app.route('/adicionar', methods=['POST'])
def adicionar_voo():
    try:
        # Coletando os dados do formulário
        origem = request.form['origem']
        destino = request.form['destino']
        data_voo = request.form['data_voo']
        quantidade_viagens = request.form['quantidade_viagens']
        custo_reais = request.form['custo_reais']
        custo_milhas = request.form['custo_milhas']
        programa_fidelidade = request.form['programa_fidelidade']

        # Aqui você pode processar e salvar os dados no banco de dados, por exemplo.
        # No exemplo, vamos apenas simular o sucesso.
        print(f"Voo cadastrado: {origem} -> {destino}, Data: {data_voo}, Quantidade: {quantidade_viagens}, Custo (R$): {custo_reais}, Custo (Milhas): {custo_milhas}, Programa: {programa_fidelidade}")

        return jsonify({"success": True})  # Retorna JSON indicando sucesso

    except Exception as e:
        return jsonify({"success": False, "message": str(e)})  # Retorna JSON indicando erro

if __name__ == '__main__':
    app.run(debug=True)
