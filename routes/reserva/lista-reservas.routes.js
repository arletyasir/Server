import express from 'express';
import ListaReservasController from '../../src/controllers/reserva/lista-reserva.js';
const listaReservasRoute = express.Router();
import validarToken from '../validarToken.js';

//listaReservasRoute.use(validarToken)

listaReservasRoute.get('/listareservas/:state', async (req, res) => {
  try {
    const state = req.params.state; 
    const reservas = await ListaReservasController.obteneListaReservas(state);
    res.status(200).json({
        message: "reservas obtenidos con éxito",
        results: reservas,
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la lista de reservas' });
  }
});

export default listaReservasRoute;
