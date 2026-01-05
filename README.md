📋 API de CRUD de Tarefas – Node.js + Express

Este projeto é uma API REST simples desenvolvida com Node.js e Express, com o objetivo de praticar conceitos fundamentais de backend, como rotas, métodos HTTP, regras de negócio e versionamento com Git.

A persistência de dados é simulada por meio de um arquivo JSON, funcionando como um “banco de dados” local para fins de estudo.

🚀 Funcionalidades

Criar tarefas

Listar todas as tarefas

Atualizar tarefas existentes

Deletar tarefas

Controle de status da tarefa (pendente ou concluida)

🛠️ Tecnologias utilizadas

Node.js

Express

JavaScript

Git & GitHub

📂 Estrutura do projeto
📁 Projeto-EXPRESS-estudo-de-API
 ├── node_modules/
 ├── tarefas.json
 ├── index.js
 ├── package.json
 ├── package-lock.json
 └── .gitignore

▶️ Como executar o projeto
1️⃣ Clone o repositório
git clone https://github.com/Biuhl/Projeto-EXPRESS-estudo-de-API.git

2️⃣ Acesse a pasta do projeto
cd Projeto-EXPRESS-estudo-de-API

3️⃣ Instale as dependências
npm install

4️⃣ Inicie o servidor
node index.js


O servidor será iniciado em:

http://localhost:3000

🔗 Endpoints da API
📌 Listar tarefas

GET

/tarefas

📌 Criar nova tarefa

POST

/tarefas


Body (JSON):

{
  "nome": "Estudar Express"
}

📌 Atualizar tarefa

PUT

/tarefas/:id


Body (JSON):

{
  "nome": "Estudar Express",
  "status": "concluida"
}

📌 Deletar tarefa

DELETE

/tarefas/:id

📌 Observações importantes

O arquivo tarefas.json funciona como um banco de dados simulado.

O projeto tem foco educacional, voltado para aprendizado prático de APIs REST.

Ferramentas como Thunder Client, Postman ou Insomnia podem ser usadas para testar os endpoints.

📚 Próximos passos (evolução do projeto)

Separar rotas e regras de negócio em camadas

Implementar banco de dados real (SQLite ou MongoDB)

Criar testes automatizados

Desenvolver um frontend consumindo esta API

👨‍💻 Autor

Projeto desenvolvido para fins de estudo e evolução em backend.
