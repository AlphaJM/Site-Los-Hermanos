const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Definindo uma rota básica para testar
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

const db = require('./config/db');

db.initialize().then(() => {
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
}).catch((err) => {
  console.error('Erro ao inicializar o servidor:', err);
});