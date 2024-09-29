# Meu Projeto Flask - Cadastro e Busca de Voos

## Descrição

Este é um projeto de aplicação web desenvolvido em Flask que permite aos usuários se cadastrar e buscar voos utilizando o Google Flights. A aplicação utiliza Selenium para automatizar a busca de voos e exibir os resultados em uma tabela.

## Tecnologias Utilizadas

- **Python 3.10**
- **Flask**: Framework web para construção de aplicações.
- **Docker**: Para encapsulamento e isolamento da aplicação.
- **Bootstrap**: Framework CSS para estilização da interface.

## Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

- [Python 3.10 ou superior](https://www.python.org/downloads/)
- [Docker](https://www.docker.com/get-started)

## Estrutura de Pastas

```
meu_projeto_flask/
│
├── app.py
├── requirements.txt
├── venv/
├── Dockerfile
├── docker-compose.yml
├── static/
│   ├── css/
│   │   ├── bootstrap.min.css
│   │   └── styles.css
│   └── js/
│       ├── bootstrap.bundle.min.js
│       └── jquery.slim.min.js
└── templates/
    ├── cadastro.html
    ├── sucesso.html
```

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu_usuario/seu_repositorio.git
   cd seu_repositorio
   ```

2. **Crie e ative um ambiente virtual:**

   ```bash
   python -m venv venv
   source venv/bin/activate  # Linux/Mac
   venv\Scripts\activate  # Windows
   ```

3. **Instale as dependências:**

   ```bash
   pip install -r requirements.txt
   ```

## Executando a Aplicação

### Com Docker

1. **Construir a imagem:**

   ```bash
   docker-compose build
   ```

2. **Executar a aplicação:**

   ```bash
   docker-compose up
   ```

Acesse a aplicação em [http://localhost:5000](http://localhost:5000).

### Sem Docker

1. **Execute o servidor Flask:**

   ```bash
   python app.py
   ```

Acesse a aplicação em [http://127.0.0.1:5000](http://127.0.0.1:5000).

## Funcionalidades

- Cadastro de usuários com nome e e-mail.

## Contribuição

Sinta-se à vontade para contribuir! Você pode fazer isso através de pull requests ou abrindo issues para discutir novas funcionalidades.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
