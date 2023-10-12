import db from "../../../db/db.Config.js";

class ClienteController {
  static obtenerClientePorId(clienteId) {
    return new Promise((resolve, reject) => {
      try {
        const sql = `
          SELECT id, nombre, apellido, direccion, telefono, email
          FROM cliente
          WHERE id = ?;
        `;

        const values = [clienteId];

        db.query(sql, values, (err, results) => {
          if (err) {
            reject(err);
          } else {
            if (results.length > 0) {
              resolve(results[0]); // Devuelve el primer cliente encontrado (debería ser único por ID)
            } else {
              resolve(null); // No se encontró ningún cliente con el ID especificado
            }
          }
        });
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default ClienteController;
