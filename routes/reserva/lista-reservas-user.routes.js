import express from 'express';
import ListaReservasUserController from '../../src/controllers/reserva/lista-reserva-user.js';
const listaReservasUserRoute = express.Router();

listaReservasUserRoute.get('/listareservasuser/:state/:userid', async (req, res) => {
  try {
    const state = req.params.state; 
    const userid = req.params.userid; 

    const reservas = await ListaReservasUserController.obteneListaReservasUser(state,userid);
    res.status(200).json({
        message: "reservas por usuario obtenidos con éxito",
        results: reservas,
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la lista de reservas por usuario' });
  }
});

export default listaReservasUserRoute;
