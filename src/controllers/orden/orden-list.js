import db from "../../../db/db.Config.js";

class ListaOrdenController {
    static obteneListaOrden(state) {
      return new Promise((resolve, reject) => {
        try {
              const sql = `
              SELECT orden.id, orden.cliente_id,cliente.nombre AS cliente_nombre, orden.fecha, orden.estado
              FROM orden
              JOIN cliente ON orden.cliente_id = cliente.id
              WHERE orden.estado = ?;
            `;
            
            const values = [state]; 
            
  
              db.query(sql, values, (err, results) => {
                if (err) {
                  reject(err);
                  console.log(err)
                } else {
                  resolve(results); 
                  console.log(results)
                }
              });
        } catch (error) {
          reject(error);
        }
      });
    }
  }
  
export default ListaOrdenController;