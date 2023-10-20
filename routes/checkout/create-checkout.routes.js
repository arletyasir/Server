
import express from 'express';
import Checkout from '../../src/models/checkout.js';
import createCheckoutController from '../../src/controllers/checkout/checkout-create.js';
const createCheckoutRoute = express.Router();
import validarToken from '../validarToken.js';

//createAsignacionRoute.use(validarToken)

createCheckoutRoute.post('/createcheckout', async (req, res) => {
  try {
    const newCheckout = new Checkout(
        req.body.order_id,
        req.body.producto_id,
        req.body.cantidad_preparada,
        req.body.cantidad,
        req.body.estado
      );
      const checkoutId = await createCheckoutController.createCheckout(newCheckout);


    res.status(201).json({ id: checkoutId, message: 'checkout creada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la checkout' });
  }
});

export default createCheckoutRoute;
