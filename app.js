import express from 'express';
import { loginRoute, registerRoute,
  listaOrdenRoute,
  createAsignacionRoute,
  updateOrdenRoute,
  clienteRoute,
  orderProductoRoute,
  createCheckoutRoute,
  listaCheckoutRoute,
  updateOrdenProductoRoute
} from './routes/index.js';

import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());



const port = process.env.PORT || 3000



app.get('/', (req, res) => {
  console.log(req.body)
  res.status(200).send(`<h1>Hola</h1>`)

})
app.use(express.static('public'))


app.use(loginRoute);
app.use(registerRoute);


app.use(listaOrdenRoute);
app.use(createAsignacionRoute);
app.use(updateOrdenRoute);
app.use(clienteRoute);
app.use(orderProductoRoute);
app.use(createCheckoutRoute);
app.use(listaCheckoutRoute);
app.use(updateOrdenProductoRoute);





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
