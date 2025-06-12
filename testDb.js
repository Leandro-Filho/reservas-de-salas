require('dotenv').config();
const pool = require('./src/config/db');

async function testarConexao() {
  try {
    // Teste de conexão básica
    const result = await pool.query('SELECT NOW()');
    console.log('✅ Conexão bem-sucedida. Data/hora do servidor:', result.rows[0]);

    // Teste da query de inserção
    const email = 'teste@example.com';
    const senha = 'senha123';
    const empresa = 'Empresa Teste';
    const celular = '123456789';

    const insertQuery = `
      INSERT INTO usuario (email, senha, empresa_escola, numero_celular)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;
    const values = [email, senha, empresa, celular];

    const insertResult = await pool.query(insertQuery, values);
    console.log('✅ Usuário inserido com sucesso:', insertResult.rows[0]);

    process.exit(0); // Encerra com sucesso
  } catch (error) {
    console.error('❌ Erro ao testar conexão ou inserção:', error.message);
    process.exit(1); // Encerra com erro
  }
}

testarConexao();
