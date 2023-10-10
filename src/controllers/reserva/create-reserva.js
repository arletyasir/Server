import db from "../../../db/db.Config.js";




class createReservaController {
  static createReserva(newReserva) {
    return new Promise((resolve, reject) => {
      try {
        const sql = 'INSERT INTO reservas (iduser, idmenu, comment, total, reservationdate, numberpeople, state) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const values = [
          newReserva.iduser,
          newReserva.idmenu,
          newReserva.comment,
          newReserva.total,
          newReserva.reservationdate,
          newReserva.numberpeople,
          newReserva.state,
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

export default createReservaController;
