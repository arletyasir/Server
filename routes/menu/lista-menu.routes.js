import express from 'express';
import ListaMenuController from '../../src/controllers/menu/lista-menu.js';
const obtenerMenuRoute = express.Router();


obtenerMenuRoute.get('/obtenermenus', async (req, res) => {
        ListaMenuController.obteneListaMenus()
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
                    message: "Menús obtenidos con éxito",
                    results: results,
                });
            })
            .catch((error) => {
                res.status(500).json({ error: "Error al obtener los menús" });
            });

    });

export default obtenerMenuRoute;
