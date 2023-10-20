import db from "../../../db/db.Config.js";

class ListaCheckoutController {
  static obteneListaCheckout(order_id) {
    return new Promise((resolve, reject) => {
      try {
        const sql = `
          SELECT c.id, c.order_id, c.producto_id, c.cantidad_preparada, c.cantidad, c.estado, p.nombre AS producto_nombre, p.imagen, p.precio_unitario
          FROM checkout c
          JOIN producto p ON c.producto_id = p.id
          WHERE c.order_id = ?;
        `;

        const values = [order_id];

        db.query(sql, values, (err, results) => {
          if (err) {
            reject(err);
            console.log(err);
          } else {
            resolve(results);
          }
        });
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default ListaCheckoutController;
