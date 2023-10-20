import express from 'express';
import UpdateOrdenProductoController from '../../src/controllers/orden-producto/orden-producto-update.js';
const updateOrdenProductoRoute = express.Router();
import validarToken from '../validarToken.js';

//updateOrdenProductoRoute.use(validarToken);

updateOrdenProductoRoute.put('/updateordenProducto/:orderId', async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const estado = req.body.estado; 
    const cantidad = req.body.cantidad; 
    const producto_id = req.body.idproducto; 

  
    await UpdateOrdenProductoController.updateOrderProductoStatus(orderId, estado,cantidad,producto_id);

    res.status(200).json({
      message: 'Order status updated successfully',
    });
  } catch (error) {
    res.status(500).json({ error: 'Error updating order status' });
  }
});

export default updateOrdenProductoRoute;
