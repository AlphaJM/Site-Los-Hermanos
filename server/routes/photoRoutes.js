// server/routes/photoRoutes.js
const express = require('express');
const router = express.Router();

// Exemplo de rota para upload de foto
router.post('/upload', (req, res) => {
  // Lógica para salvar a foto
  res.json({ message: 'Foto enviada com sucesso' });
});

// Rota para obter todas as fotos
router.get('/', (req, res) => {
  // Lógica para buscar fotos do banco de dados
  res.json([{ id: 1, url: 'url-da-foto.jpg' }]);
});

module.exports = router;
