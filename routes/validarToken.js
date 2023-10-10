import jwt from 'jsonwebtoken';

function validarToken(req, res, next) {
  // Obtener el token del encabezado de la solicitud
  const token = req.headers.authorization || req.body.authorization;

  if (!token) {
    return res.status(401).json({ auth: false, message: 'Token no proporcionado' });
  }

  // Verificar y decodificar el token
  jwt.verify(token, 'LucianoSoruco', (err, decoded) => {
    if (err) {
      return res.status(403).json({ auth: false, message: 'Token inválido o expirado' });
    }

    // Si el token es válido, puedes guardar la información decodificada en el objeto de solicitud para su uso posterior
    req.userId = decoded.userId;
    req.email = decoded.email;

    // Llamar a next() para permitir que la solicitud continúe
    next();
  });
}

export default validarToken;
