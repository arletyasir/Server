import express from 'express';
import Asignacion from '../../src/models/asignaciones.js';
import createAsignacionController from '../../src/controllers/asignaciones/asignacion-create.js';
const createAsignacionRoute = express.Router();
import validarToken from '../validarToken.js';

//createAsignacionRoute.use(validarToken)

createAsignacionRoute.post('/createasignacion', async (req, res) => {
  try {
    const newReserva = new Asignacion(
      req.body.order_id,
      req.body.usuario_id,
      req.body.fecha_asignacion,

    );

    const reservaId = await createAsignacionController.createAsignacion(newReserva);

    res.status(201).json({ id: reservaId, message: 'asignacion creada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la asignacion' });
  }
});

export default createAsignacionRoute;
