import db from "../../../db/db.Config.js";

class createAsignacionController {
  static createAsignacion(newAsig) {
    return new Promise((resolve, reject) => {
      try {
        const sql = 'INSERT INTO asignaciones (order_id, usuario_id, fecha_asignacion) VALUES (?, ?, ?)';
        const values = [
          newAsig.order_id,
          newAsig.usuario_id,
          newAsig.fecha_asignacion,
        ];

        db.query(sql, values, (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results.insertId);
          }
        });
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default createAsignacionController;
