import express from 'express';
import OrderProductoController from '../../src/controllers/orden-producto/orden-producto-list.js';  // Asegúrate de que la ruta sea correcta

const orderProductoRoute = express.Router();

// Ruta para obtener los productos de un pedido por su ID
orderProductoRoute.get('/orderproductos/:orderId', async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const orderProductos = await OrderProductoController.getOrderProductosByOrderId(orderId);
    res.status(200).json(orderProductos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los productos del pedido' });
  }
});

export default orderProductoRoute;
