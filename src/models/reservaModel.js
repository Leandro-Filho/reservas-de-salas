const pool = require('../config/db');

class Reserva {

  static async create(reserva) {
    const query = `
      INSERT INTO reserva (titulo, data, horario_inicio, horario_final)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;

    const values = [
      reserva.titulo ?? null,
      reserva.data ?? null, 
      reserva.horario_inicio ?? null, 
      reserva.horario_final ?? null
    ];

    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async findAll() {
    const query = `
      SELECT *
      FROM reserva
      ORDER BY data DESC, horario_inicio
    `;
    const result = await pool.query(query);
    return result.rows;
  }

  static async findById(id) {
    const query = `
      SELECT *
      FROM reserva
      WHERE id = $1
    `;
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }

  static async findBySala(salaId) {
    // Como não tem id_salas, não pode buscar por sala
    // Se quiser, pode remover essa função, mas vou deixar com retorno vazio para evitar erros
    return [];
  }

  static async update(id, reserva) {
    const query = `
      UPDATE reserva
      SET titulo = $1, data = $2, 
          horario_inicio = $3, horario_final = $4, update_at = CURRENT_TIMESTAMP
      WHERE id = $5
      RETURNING *
    `;

    const values = [
      reserva.titulo ?? null, 
      reserva.data ?? null,
      reserva.horario_inicio ?? null, 
      reserva.horario_final ?? null,
      id
    ];

    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async delete(id) {
    const query = 'DELETE FROM reserva WHERE id = $1';
    await pool.query(query, [id]);
  }
}

module.exports = Reserva;