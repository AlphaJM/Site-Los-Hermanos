const oracledb = require('oracledb');

async function initialize() {
  try {
    await oracledb.createPool({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      connectionString: process.env.DB_CONNECTION_STRING,
    });
    console.log('Conexão com Oracle estabelecida');
  } catch (err) {
    console.error('Erro ao conectar ao Oracle:', err);
  }
}

async function close() {
  await oracledb.getPool().close();
}

module.exports = { initialize, close };