import express from 'express';
import ClienteController from '../../src/controllers/cliente/cliente-by-id.js';

const clienteRoute = express.Router();

// Ruta para obtener un cliente por su ID
clienteRoute.get('/cliente/:id', async (req, res) => {
  try {
    // Recoge el ID del cliente de la solicitud
    const clienteId = req.params.id;

    // Llama al controlador para obtener los datos del cliente por su ID
    const cliente = await ClienteController.obtenerClientePorId(clienteId);

    // Si se encuentra el cliente, responde con los datos
    if (cliente) {
      res.status(200).json({ message: 'Cliente obtenido con éxito', cliente: cliente });
    } else {
      // Si no se encuentra el cliente, responde con un mensaje de error
      res.status(404).json({ error: 'Cliente no encontrado' });
    }
  } catch (error) {
    // Si ocurre un error, responde con un código de error del servidor
    res.status(500).json({ error: 'Error al obtener el cliente' });
  }
});

export default clienteRoute;
