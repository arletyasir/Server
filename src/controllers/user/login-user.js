import db from "../../../db/db.Config.js";
import jwt from "jsonwebtoken";

class UserLoginController {
  static loginUser(email, contrasena) {
    return new Promise((resolve, reject) => {
      try {
        const sql = 'SELECT * FROM tbluser WHERE tbluser.email = ? AND tbluser.contrasena = ?';
        const values = [email, contrasena];

        db.query(sql, values, (err, results) => {
          if (err) {
            reject(err);
          } else {
            if (results.length === 0) {
              resolve({ user: null, auth: false, message: 'Incorrect contrasena or email',token:null });
            } else if (results[0].state === 0) {
              resolve({ user: null, message: 'User account blocked', auth: false,token:null });
            } else {
              const user = results[0];

              const token = jwt.sign({ userId: user.id, email: user.email }, 'LucianoSoruco', { expiresIn: '3h' });

              resolve({ user: user, auth: true, message: 'Login successful', token: token });
            }
          }
        });
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default UserLoginController;
