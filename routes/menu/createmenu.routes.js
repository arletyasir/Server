import express from 'express';
import multer from 'multer';
import { fileURLToPath } from 'url';
import path from 'path';
import createMenuController from '../../src/controllers/menu/create-menu.js';
import Menu from '../../src/models/menu.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createMenuRoute = express.Router();

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../../public/images'),
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
});

const upload = multer({ storage: storage });

createMenuRoute.post('/createmenu', upload.single('fotomenu'),async (req, res, next)=> {
  const uploadedFile = req.file.filename;

  try {
    const newMenu = new Menu(req.body.title, req.body.descriptiontxt, req.body.aperitivocortesia,req.body.cupos,req.body.price, uploadedFile,req.body.fecha,1);

    const menuId = await createMenuController.createmenu(newMenu);
    res.status(201).json({ id: menuId, message: 'Menu creado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el Menu' });
  }
});

export default createMenuRoute;
