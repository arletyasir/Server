import express from 'express';
import UserLoginController from '../../src/controllers/user/login-user.js';
const loginRoute = express.Router();


loginRoute.post('/login', async (req, res) => {
  try {
    const { email, contrasena } = req.body;
    const response = await UserLoginController.loginUser(email, contrasena);
    if (response.user) {
      // Inicio de sesión exitoso
      res.status(200).json(response);
    } else {
      // Credenciales incorrectas o usuario no encontrado
      res.status(401).json(response);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
});

export default loginRoute;
