import express from 'express';
import User from '../../src/models/user.js';
import UserRegisterController from '../../src/controllers/user/register-user.js';

const registerRoute = express.Router();

registerRoute.post('/register', async (req, res) => {
    try {
      const newUser = new User(req.body.fullname, req.body.phonenumber, req.body.email, req.body.passworduser, req.body.state);
      const userId = await UserRegisterController.createUser(newUser);
      res.status(201).json({ id: userId, message: 'Usuario creado exitosamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear el usuario' });
    }
  });

export default registerRoute;