import express from 'express';
import UpdateController from '../../src/controllers/orden/orden-update.js';
const updateOrdenRoute = express.Router();
import validarToken from '../validarToken.js';

//updateOrdenRoute.use(validarToken);

updateOrdenRoute.put('/updateorden/:orderId', async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const newStatus = req.body.newStatus; 

  
    await UpdateController.updateOrderStatus(orderId, newStatus);

    res.status(200).json({
      message: 'Order status updated successfully',
    });
  } catch (error) {
    res.status(500).json({ error: 'Error updating order status' });
  }
});

export default updateOrdenRoute;
