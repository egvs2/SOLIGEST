const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
app.use(express.json());

const port = Number(process.env.APP_PORT) || 3000;

const dbConfig = {
  host: process.env.DB_HOST || 'db',
  port: Number(process.env.DB_PORT) || 3306,
  database: process.env.DB_NAME || 'soligest',
  user: process.env.DB_USER || 'soligest_user',
  password: process.env.DB_PASSWORD || 'soligest_pass',
};

async function testarConexaoBanco() {
  const connection = await mysql.createConnection(dbConfig);
  await connection.ping();
  await connection.end();
}

app.get('/health', async (req, res) => {
  try {
    await testarConexaoBanco();
    res.status(200).json({ status: 'ok', banco: 'conectado' });
  } catch (err) {
    res.status(500).json({ status: 'erro', banco: 'falha', detalhe: err.message });
  }
});

app.listen(port, async () => {
  console.log(`Servidor rodando na porta ${port}`);
  try {
    await testarConexaoBanco();
    console.log('Conexão com o MySQL estabelecida com sucesso!');
  } catch (err) {
    console.error('Erro inicial ao conectar no MySQL:', err.message);
  }
});