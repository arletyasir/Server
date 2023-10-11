import db from "../../../db/db.Config.js";

class UpdateController {
  static updateOrderStatus(orderId, newStatus) {
    return new Promise((resolve, reject) => {
      try {
        const sql = 'UPDATE orden SET estado = ? WHERE id = ?';

        const values = [newStatus, orderId];

        db.query(sql, values, (err, results) => {
          if (err) {
            reject(err);
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

export default UpdateController;
