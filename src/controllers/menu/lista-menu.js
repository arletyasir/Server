
import db from "../../../db/db.Config.js";

class ListaMenuController {
    static obteneListaMenus() {
      return new Promise((resolve, reject) => {
        try {
            const sql = `
            SELECT
                m.*,
                (
                    SELECT JSON_ARRAYAGG(
                        JSON_OBJECT('id', lpm.idprincipal, 'name', pp.name)
                    )
                    FROM lista_principales_menu AS lpm
                    JOIN platos_principales AS pp ON lpm.idprincipal = pp.id
                    WHERE lpm.idmenu = m.id
                ) AS platos_principales,
                (
                    SELECT JSON_ARRAYAGG(
                        JSON_OBJECT('id', lem.identrante, 'name', pe.name)
                    )
                    FROM lista_entrantes_menu AS lem
                    JOIN platos_entrantes AS pe ON lem.identrante = pe.id
                    WHERE lem.idmenu = m.id
                ) AS platos_entrantes,
                (
                    SELECT JSON_ARRAYAGG(
                        JSON_OBJECT('id', lpm.idpostre, 'name', po.name)
                    )
                    FROM lista_postres_menu AS lpm
                    JOIN postres AS po ON lpm.idpostre = po.id
                    WHERE lpm.idmenu = m.id
                ) AS postres
            FROM menus AS m where m.state=?;
            `;
            const values = [1];
  
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
  
export default ListaMenuController;