import express from 'express';
import db from '../../../db/db.Config.js';

class OrderProductoController {
  static getOrderProductosByOrderId(orderId) {
    return new Promise((resolve, reject) => {
      try {
        const sql = `
          SELECT *
          FROM orderproducto
          JOIN producto ON orderproducto.producto_id = producto.id
          WHERE orderproducto.order_id = ?;
        `;
        const values = [orderId];

        db.query(sql, values, (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve({ message: 'Productos obtenidos con éxito', results });
          }
        });
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default OrderProductoController;
