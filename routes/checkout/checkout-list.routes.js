import express from 'express';
import ListaCheckoutController from '../../src/controllers/checkout/checkout-list.js';
const listaCheckoutRoute = express.Router();
import validarToken from '../validarToken.js';

//listaCheckoutRoute.use(validarToken)

listaCheckoutRoute.get('/listacheckout/:state', async (req, res) => {
  try {
    const state = req.params.state; 
    const reservas = await ListaCheckoutController.obteneListaCheckout(state);
    res.status(200).json({
        message: "checkout obtenidos con éxito",
        results: reservas,
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la lista de checkout' });
  }
});

export default listaCheckoutRoute;
