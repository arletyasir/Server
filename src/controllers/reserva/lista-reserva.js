import db from "../../../db/db.Config.js";

class ListaReservasController {
    static obteneListaReservas(state) {
      return new Promise((resolve, reject) => {
        try {
            const sql = `SELECT * FROM reservas AS r where r.state=?;`;
            const values = [state];
  
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
  
export default ListaReservasController;