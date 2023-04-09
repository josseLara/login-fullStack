import jwt from "jsonwebtoken";

export const generarToken = async (req, res, id) => {

    // si la contraseña coincide, generar un token JWT
    const token = jwt.sign({ id: id }, process.env.SECRET_KEY, { expiresIn: '1h' });

    // almacenar el token JWT en el encabezado de la respuesta
    res.setHeader('Authorization', `Bearer ${token}`);

    // almacenar el token JWT en una cookie
    res.cookie('token', token, { 
      httpOnly: true, 
      secure: true, 
      maxAge: 3600000
    });
    
    // continuar con la lógica del controlador
    res.status(200).json({ status: "ok" });


}


export const comprobartoken = (req, res, next) => {

      const token = req.cookies.token;
    
      res.setHeader('Authorization', `Bearer ${token}`);
      if (!token) {
        return next();
      }
    
      try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
    
        if (decoded) {
          console.log('Token válido. Puede pasar.');
          return res.status(200).json({ message: 'Autorizado.' });
        }
      } catch (err) {
        return next(new Error('No autorizado: token no válido.'));
      }
     
}