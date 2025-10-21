# 🎬 API Node.js - Catálogo de Filmes

Projeto desenvolvido com o objetivo de **reforçar meu aprendizado em Node.js, Express e integração com banco de dados MySQL**.  
Esta API permite o cadastro, listagem, atualização e exclusão de filmes, além do upload de imagens usando **Multer**.

---

## 🚀 Tecnologias Utilizadas

🟩 **Node.js** – Ambiente de execução JavaScript  
⚙️ **Express** – Framework para criação de rotas e controle da API  
🗄️ **MySQL2** – Conexão e manipulação de banco de dados  
🖼️ **Multer** – Upload de arquivos (imagens)  
🔐 **Dotenv** – Gerenciamento de variáveis de ambiente  
🌐 **CORS** – Permissão de acesso entre aplicações  
🔄 **Nodemon** – Atualização automática do servidor em desenvolvimento  

---

## ⚙️ Funcionalidades

✅ Cadastrar novos filmes  
✅ Listar todos os filmes cadastrados  
✅ Atualizar informações de um filme  
✅ Deletar filmes  
✅ Fazer upload de imagem para cada filme  

---

## 📸 Demonstração

Exemplo de imagem cadastrada:  
![Capa do filme](./uploads/harry-capa.jpg)

---

## 💻 Como Executar o Projeto

```bash
# 1️⃣ Clonar o repositório
git clone https://github.com/giovannabs/api-nodejs-filmes

# 2️⃣ Acessar a pasta do projeto
cd api-nodejs-filmes

# 3️⃣ Instalar as dependências
npm install

# 4️⃣ Criar um arquivo .env com as variáveis de ambiente
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=filmes_db
PORT=5010

# 5️⃣ Iniciar o servidor
npm start
```

A API ficará disponível em:  
👉 **http://localhost:5010**

---

## 🧩 Estrutura de Pastas (exemplo)

```
api-nodejs-filmes/
├── src/
│   ├── routes/
│   ├── controllers/
│   ├── database/
│   └── uploads/
├── .env
├── package.json
└── server.js
```

---

## 🧠 Sobre o Projeto

Este projeto foi criado com o objetivo de **reforçar meu aprendizado em Node.js, Express e Banco de Dados MySQL**, colocando em prática conceitos de rotas, controle de requisições e integração com o banco.  

Durante o desenvolvimento, aprimorei conhecimentos sobre:
- 🔹 Criação de rotas RESTful  
- 🔹 Organização de estrutura de projetos  
- 🔹 Upload de arquivos com Multer  
- 🔹 Conexão e queries no MySQL  
- 🔹 Boas práticas com `.env` e variáveis de ambiente  

---

## 👩‍💻 Autora

**Giovanna Barbosa de Souza**  
🎓 Estudante de Análise e Desenvolvimento de Sistemas – Centro Universitário Senac  
🌐 [GitHub](https://github.com/giovannabs) | [LinkedIn](https://linkedin.com/in/seuusuario)

---

⭐ *Se este projeto te ajudou, não esqueça de deixar uma estrela!*
