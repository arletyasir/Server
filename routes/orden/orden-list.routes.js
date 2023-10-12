import express from 'express';
import ListaOrdenController from '../../src/controllers/orden/orden-list.js';
const listaOrdenRoute = express.Router();
import validarToken from '../validarToken.js';

//listaOrdenRoute.use(validarToken)

listaOrdenRoute.get('/listaorden/:state', async (req, res) => {
  try {
    const state = req.params.state; 
    const reservas = await ListaOrdenController.obteneListaOrden(state);
    res.status(200).json({
        message: "ordenes obtenidos con éxito",
        results: reservas,
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la lista de reservas' });
  }
});

export default listaOrdenRoute;
