const Reserva = require('../models/reservaModel');

const reservaController = {
  // Criar uma nova reserva
  async create(req, res) {
    try {
      const novaReserva = await Reserva.create(req.body);
      res.status(201).json(novaReserva);
    } catch (error) {
      res.status(400).json({ erro: error.message });
    }
  },

  // Listar todas as reservas
  async getAll(req, res) {
    try {
      const reservas = await Reserva.findAll();
      res.status(200).json(reservas);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  },

  // Buscar reserva por ID
  async getById(req, res) {
    try {
      const reserva = await Reserva.findById(req.params.id);
      if (!reserva) {
        return res.status(404).json({ erro: 'Reserva não encontrada' });
      }
      res.status(200).json(reserva);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  },

  // Buscar reservas por usuário
  async getByUsuario(req, res) {
    try {
      const reservas = await Reserva.findByUsuario(req.params.id_usuario);
      res.status(200).json(reservas);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  },

  // Buscar reservas por sala
  async getBySala(req, res) {
    try {
      const reservas = await Reserva.findBySala(req.params.id_sala);
      res.status(200).json(reservas);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  },

  // Atualizar reserva
  async update(req, res) {
    try {
      const reservaAtualizada = await Reserva.update(req.params.id, req.body);
      if (!reservaAtualizada) {
        return res.status(404).json({ erro: 'Reserva não encontrada' });
      }
      res.status(200).json(reservaAtualizada);
    } catch (error) {
      res.status(400).json({ erro: error.message });
    }
  },

  // Excluir reserva
  async delete(req, res) {
    try {
      await Reserva.delete(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  },

  // Verificar disponibilidade para nova reserva
  async verificarDisponibilidade(req, res) {
    try {
      const { id_salas, data, horario_inicio, horario_final } = req.query;
      
      if (!id_salas || !data || !horario_inicio || !horario_final) {
        return res.status(400).json({ 
          erro: 'Parâmetros incompletos. Forneça id_salas, data, horario_inicio e horario_final' 
        });
      }
      
      
      const Sala = require('../models/salaModel');
      const disponivel = await Sala.verificarDisponibilidade(
        id_salas, data, horario_inicio, horario_final
      );
      
      res.status(200).json({ disponivel });
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  },

    async formReservar(req, res) {
    const { id } = req.params;
    try {
      const resultado = await pool.query('SELECT * FROM sala WHERE id = $1', [id]);
      if (resultado.rows.length === 0) return res.status(404).send('Sala não encontrada');

      const sala = resultado.rows[0];
        res.render('reservarSala', { sala });
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao carregar formulário de reserva');
    }
  },

    async reservar(req, res) {
  const { sala_id, nome, horario_inicio, horario_fim } = req.body;
      req.body.id_usuario = null;
  try {
    await pool.query(
      `INSERT INTO reserva (sala_id, nome_usuario, horario_inicio, horario_fim)
       VALUES ($1, $2, $3, $4)`,
      [sala_id, nome, horario_inicio, horario_fim]
    );

    res.redirect('/salas/visualizar');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao realizar reserva');
  }
}

};

module.exports = reservaController;