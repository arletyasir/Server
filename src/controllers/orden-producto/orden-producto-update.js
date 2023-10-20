import db from "../../../db/db.Config.js";

class UpdateOrdenProductoController {
  static updateOrderProductoStatus(orderId, estado,cantidad,idproducto) {
    return new Promise((resolve, reject) => {
      try {
        const sql = 'UPDATE orderproducto SET estado = ?,cantidadPreparada = ? WHERE order_id = ? and producto_id=?';

        const values = [estado,cantidad, orderId,idproducto];

        db.query(sql, values, (err, results) => {
          if (err) {
            reject(err);
            console.log(err)
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

export default UpdateOrdenProductoController;
