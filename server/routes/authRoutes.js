// server/routes/authRoutes.js
const express = require('express');
const router = express.Router();

// Exemplo de rota para login de administrador
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  // Lógica de autenticação (para desenvolver)
  if (username === 'admin' && password === '1234') { // Exemplo básico
    res.json({ message: 'Login bem-sucedido', token: 'exemplo-de-token' });
  } else {
    res.status(401).json({ message: 'Credenciais inválidas' });
  }
});

module.exports = router;
