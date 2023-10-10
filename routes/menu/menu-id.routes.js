import express from 'express';
import MenuIdController from '../../src/controllers/menu/menu-id.js';
const getMenuId = express.Router();


getMenuId.get('/obtenermenuid/:idmenu', async (req, res) => {
    const idmenu = req.params.idmenu; 

    MenuIdController.obtenerMenuId(idmenu)
            .then((results) => {
                results.forEach((menu) => {
                    menu.platos_principales = menu.platos_principales
                        ? JSON.parse(menu.platos_principales)
                        : [];
                    menu.platos_entrantes = menu.platos_entrantes
                        ? JSON.parse(menu.platos_entrantes)
                        : [];
                    menu.postres = menu.postres ? JSON.parse(menu.postres) : [];
                });

                res.status(200).json({
                    message: "Menú detalle obtenidos con éxito",
                    results:results.length>0?results[0]:null,
                });
            })
            .catch((error) => {
                res.status(500).json({ error: "Error al obtener detalle menú" });
            });

    });

export default getMenuId;
