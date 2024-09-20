import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  user: 'seu_usuario',
  host: 'localhost',
  database: 'cuida_saude',
  password: 'sua_senha',
  port: 5432,
});

const testConnection = async () => {
  try {
    const client = await pool.connect();
    const res = await client.query('SELECT NOW()');
    console.log('Conexão com o banco de dados bem-sucedida:', res.rows[0]);
    client.release();
  } catch (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  }
};

// testConnection();

export default pool;
