import express from 'express';
import Reserva from '../../src/models/reserva.js';
import CreateReservaController from '../../src/controllers/reserva/create-reserva.js';
const reservaRoute = express.Router();
import validarToken from '../validarToken.js';

reservaRoute.use(validarToken)

reservaRoute.post('/createreserva', async (req, res) => {
  try {
    const newReserva = new Reserva(
      req.body.iduser,
      req.body.idmenu,
      req.body.comment,
      req.body.total,
      req.body.reservationdate,
      req.body.numberpeople,
      req.body.state
    );

    const reservaId = await CreateReservaController.createReserva(newReserva);

    res.status(201).json({ id: reservaId, message: 'Reserva creada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la reserva' });
  }
});

export default reservaRoute;
