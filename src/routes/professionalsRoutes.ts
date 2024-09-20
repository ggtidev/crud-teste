import { Router } from 'express';
import { Professional } from '../entity/Professionals';
import pool from '../../db.ts';


const router = Router();

router.get('/profissionais', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM profissionais');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar profissionais', error });
  }
});

router.post('/profissionais', async (req, res) => {
  try {
    const profissional: Professional = req.body;
    const result = await pool.query(
      'INSERT INTO profissionais (nome, especialidade, crm, telefone, email, data_contratacao, hora_inicio_atendimento, hora_fim_atendimento, dias_atendimento) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
      [
        profissional.nome,
        profissional.especialidade,
        profissional.crm,
        profissional.telefone,
        profissional.email,
        profissional.data_contratacao,
        profissional.hora_inicio_atendimento,
        profissional.hora_fim_atendimento,
        profissional.dias_atendimento,
      ]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar profissional', error });
  }
});

router.put('/profissionais/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const profissional: Professional = req.body;
    const result = await pool.query(
      'UPDATE profissionais SET nome = $1, especialidade = $2, crm = $3, telefone = $4, email = $5, data_contratacao = $6, hora_inicio_atendimento = $7, hora_fim_atendimento = $8, dias_atendimento = $9 WHERE id = $10 RETURNING *',
      [
        profissional.nome,
        profissional.especialidade,
        profissional.crm,
        profissional.telefone,
        profissional.email,
        profissional.data_contratacao,
        profissional.hora_inicio_atendimento,
        profissional.hora_fim_atendimento,
        profissional.dias_atendimento,
        id,
      ]
    );

    if (result.rowCount === 0) {
      res.status(404).json({ message: 'Profissional não encontrado' });
    } else {
      res.json(result.rows[0]);
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar profissional', error });
  }
});

router.delete('/profissionais/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const result = await pool.query('DELETE FROM profissionais WHERE id = $1', [
      id,
    ]);

    if (result.rowCount === 0) {
      res.status(404).json({ message: 'Profissional não encontrado' });
    } else {
      res.json({ message: 'Profissional excluído com sucesso' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir profissional', error });
  }
});

export default router;
