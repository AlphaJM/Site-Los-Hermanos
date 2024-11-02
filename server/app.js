// server/app.js
const express = require('express');
const db = require('./config/db'); // Importa a configuração do banco de dados
const app = express();
const port = 3000;

app.use(express.json());

// Definindo uma rota básica para testar
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Inicializa a conexão com o banco de dados e inicia o servidor
db.initialize()
  .then(() => {
    app.listen(port, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Erro ao inicializar o servidor:', err);
  });