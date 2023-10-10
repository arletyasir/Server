import db from "../../../db/db.Config.js";

class UserRegisterController {
    static createUser(newUser) {
      return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO users (fullname, phonenumber, email, passworduser, state) VALUES (?, ?, ?, ?, ?)';
        const values = [newUser.fullname, newUser.phonenumber, newUser.email, newUser.passworduser, newUser.state];
        db.query(sql, values, (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results.insertId); 
          }
        });
      });
    }
  }

  export default UserRegisterController;