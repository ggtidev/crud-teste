const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Profissional = require('./models/Profissional');
const sequelize = require('./config/database');
const loginRoutes = require('./routes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados PostgreSQL foi bem-sucedida!');
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

app.use('/', loginRoutes);

//getall
app.get('/api/profissionais', async (req, res) => {
  try {
    const profissionais = await Profissional.findAll();
    res.json(profissionais);
  } catch (err) {
    console.error('Erro ao buscar profissionais:', err);
    res.status(500).json({ error: 'Erro ao buscar profissionais' });
  }
});

// fbypk
app.get('/api/profissionais/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const profissional = await Profissional.findByPk(id);
    if (profissional) {
      res.json(profissional);
    } else {
      res.status(404).json({ error: 'Profissional não encontrado' });
    }
  } catch (err) {
    console.error('Erro ao buscar profissional:', err);
    res.status(500).json({ error: 'Erro ao buscar profissional' });
  }
});

// crt
app.post('/api/profissionais', async (req, res) => {
  try {
    const { name, specialty, crm, phone, status, email, hiringDate, startTime, endTime } = req.body;
    const novoProfissional = await Profissional.create({
      name,
      specialty,
      crm,
      phone,
      status,
      email,
      hiringDate,
      startTime,
      endTime
    });
    res.json(novoProfissional);
  } catch (err) {
    console.error('Erro ao criar profissional:', err);
    res.status(500).json({ error: 'Erro ao criar profissional' });
  }
});

//upd
app.put('/api/profissionais/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, specialty, crm, phone, status, email, hiringDate, startTime, endTime } = req.body;
    const profissional = await Profissional.findByPk(id);
    if (profissional) {
      await profissional.update({ name, specialty, crm, phone, status, email, hiringDate, startTime, endTime });
      res.json(profissional);
    } else {
      res.status(404).json({ error: 'Profissional não encontrado' });
    }
  } catch (err) {
    console.error('Erro ao editar profissional:', err);
    res.status(500).json({ error: 'Erro ao editar profissional' });
  }
});

//dell
app.delete('/api/profissionais/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const profissional = await Profissional.findByPk(id);
    if (profissional) {
      await profissional.destroy();
      res.json({ message: 'Profissional excluído com sucesso' });
    } else {
      res.status(404).json({ error: 'Profissional não encontrado' });
    }
  } catch (err) {
    console.error('Erro ao excluir profissional:', err);
    res.status(500).json({ error: 'Erro ao excluir profissional' });
  }
});


app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
