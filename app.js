import express from 'express';
import { loginRoute, registerRoute,createMenuRoute,obtenerMenuRoute,reservaRoute,listaReservasRoute,listaReservasUserRoute,getMenuId ,
  listaOrdenRoute
} from './routes/index.js';

import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());



const port = process.env.PORT || 3000



app.get('/', (req, res) => {
  console.log(req.body)
  res.status(200).send(`<form action="/createmenu" method="post" enctype="multipart/form-data" >
  <label>titulo </label>
  </br>
  <input type="text" name="title" />
  </br>
  <label>descripcion </label>
  </br>
  <input type="text" name="descriptiontxt" />
  </br>
  <label>Aperitivo de cortesia </label>
  </br>
  <input type="text" name="aperitivocortesia" />
  </br>
  <label>cupos </label>
  </br>
  <input type="number" name="cupos" />
  </br>
  <label>precio </label>
  </br>
  <input type="number" name="price" />
  </br>
  <label>fecha </label>
  </br>
  <input type="date" name="fecha" />
  </br>
  <label>foto </label>
  </br>
  <input type="file" name="fotomenu" />
  </br>
  <input type="submit" >  </input>
  
</form>`)

})

app.use(loginRoute);
app.use(registerRoute);
app.use(createMenuRoute);
app.use(obtenerMenuRoute);
app.use(listaReservasRoute);
app.use(listaReservasUserRoute);
app.use(getMenuId);
app.use(reservaRoute);

app.use(listaOrdenRoute);


app.use(express.static('public'))



// Middleware para manejar errores 404
app.use((req, res, next) => {
  res.status(404).send('<h1>404 - Not Found</h1>');
});

// Middleware para manejar errores generales
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('<h1>500 - Internal Server Error</h1>');
});

app.listen(port, () => {
  console.log('Server is running on port ' + port);
});
