import Menu from "../../models/menu.js";
import db from "../../../db/db.Config.js";

class createMenuController {
    static createmenu(newMenu) {
      return new Promise((resolve, reject) => {
        try {
            const sql = 'INSERT INTO menus (title, descriptiontxt, aperitivocortesia, cupos, price, photourl, fecha, state) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
            const values = [
                newMenu.title,
                newMenu.descriptiontxt,
                newMenu.aperitivocortesia,
                newMenu.cupos,
                newMenu.price,
                newMenu.photourl,
                newMenu.fecha,
                newMenu.state,
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
  
export default createMenuController;
