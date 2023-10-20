import db from "../../../db/db.Config.js";

class createCheckoutController {
  static createCheckout(newCheckout) {
    return new Promise((resolve, reject) => {
        try {
            // Verificar si ya existe un registro con el mismo order_id y producto_id
            const selectSql = 'SELECT * FROM checkout WHERE order_id = ? AND producto_id = ?';
            db.query(selectSql, [newCheckout.order_id, newCheckout.producto_id], (err, results) => {
              if (err) {
                reject(err);
              } else if (results.length > 0) {
                // Ya existe un registro, realiza un UPDATE
                const updateSql = 'UPDATE checkout SET cantidad_preparada = ? WHERE order_id = ? AND producto_id = ?';
                db.query(updateSql, [newCheckout.cantidad_preparada, newCheckout.order_id, newCheckout.producto_id], (err, updateResults) => {
                  if (err) {
                    reject(err);
                  } else {
                    resolve(results[0].id); // Devuelve el ID del registro actualizado
                  }
                });
              } else {
                // No existe un registro, realiza un INSERT
                const insertSql = 'INSERT INTO checkout (order_id, producto_id, cantidad_preparada, cantidad, estado) VALUES (?, ?, ?, ?, ?)';
                const values = [
                  newCheckout.order_id,
                  newCheckout.producto_id,
                  newCheckout.cantidad_preparada,
                  newCheckout.cantidad,
                  newCheckout.estado,
                ];
    
                db.query(insertSql, values, (err, insertResults) => {
                  if (err) {
                    reject(err);
                  } else {
                    resolve(insertResults.insertId); // Devuelve el ID del nuevo registro
                  }
                });
              }
            });
          } catch (error) {
            reject(error);
          }
    });
  }
}

export default createCheckoutController;

