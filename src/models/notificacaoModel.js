const pool = require('../config/db');

class UsuarioNotificacao {
  // Validar dados básicos
  static validate(usuarioNotificacao) {
    if (!usuarioNotificacao.id_user) throw new Error('ID do usuário é obrigatório');
    if (!usuarioNotificacao.id_notificacao) throw new Error('ID da notificação é obrigatório');
    return usuarioNotificacao;
  }

  // Criar associação usuário-notificação
  static async create(usuarioNotificacao) {
    this.validate(usuarioNotificacao);
    
    const query = `
      INSERT INTO usuario_notificacao (id_user, id_notificacao)
      VALUES ($1, $2)
      RETURNING *
    `;
    
    const values = [
      usuarioNotificacao.id_user,
      usuarioNotificacao.id_notificacao
    ];
    
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  // Marcar notificação como lida
  static async marcarComoLida(id_user, id_notificacao) {
    const query = `
      UPDATE usuario_notificacao
      SET lido = TRUE
      WHERE id_user = $1 AND id_notificacao = $2
      RETURNING *
    `;
    
    const result = await pool.query(query, [id_user, id_notificacao]);
    return result.rows[0];
  }

  // Buscar notificações não lidas de um usuário
  static async findNaoLidas(usuarioId) {
    const query = `
      SELECT n.*
      FROM notificacao n
      JOIN usuario_notificacao un ON n.id = un.id_notificacao
      WHERE un.id_user = $1 AND un.lido = FALSE
      ORDER BY n.created_at DESC
    `;
    
    const result = await pool.query(query, [usuarioId]);
    return result.rows;
  }

  // Excluir associação
  static async delete(id_user, id_notificacao) {
    const query = 'DELETE FROM usuario_notificacao WHERE id_user = $1 AND id_notificacao = $2';
    await pool.query(query, [id_user, id_notificacao]);
  }
}

module.exports = UsuarioNotificacao;