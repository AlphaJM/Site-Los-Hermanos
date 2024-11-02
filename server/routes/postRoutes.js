// server/routes/postRoutes.js
const express = require('express');
const router = express.Router();

// Criar um novo post
router.post('/', (req, res) => {
  const { title, content } = req.body;
  // Lógica para salvar o post no banco de dados
  res.json({ message: 'Post criado com sucesso' });
});

// Obter todos os posts
router.get('/', (req, res) => {
  // Lógica para buscar posts do banco de dados
  res.json([{ id: 1, title: 'Título', content: 'Conteúdo' }]);
});

// Atualizar um post
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  // Lógica para atualizar o post no banco de dados
  res.json({ message: `Post ${id} atualizado com sucesso` });
});

// Excluir um post
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  // Lógica para excluir o post do banco de dados
  res.json({ message: `Post ${id} excluído com sucesso` });
});

module.exports = router;
