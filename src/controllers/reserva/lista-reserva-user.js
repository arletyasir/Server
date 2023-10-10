import db from "../../../db/db.Config.js";

class ListaReservasUserController {
    static obteneListaReservasUser(state,userid) {
      return new Promise((resolve, reject) => {
        try {
            const sql = `SELECT * FROM reservas AS r where r.state=? AND r.iduser=? ;`;
            const values = [state,userid];
  
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
  
export default ListaReservasUserController;