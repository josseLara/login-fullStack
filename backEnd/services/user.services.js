import { modelUser } from "../models/user.model.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';

// registrarse
export const addUser = async (req, res, next) => {
  const { nombre, correo, pass } = req.body;
  const userExist = await modelUser.findOne({ email: correo });
  
  if (userExist) next(new Error('El usuario existe en la DB'));
    // generar un hash para el password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(pass, saltRounds);

    const user = new modelUser({
      _id: uuidv4(),
      name: nombre,
      email: correo,
      img: '',
      pass: hashedPassword
    })

    await user.save();
    
    return next()
  
}

// login
export const verifyUser = async (req, res, next) => {
  const { correo, pass } = req.body;

  // buscar el correo electrónico en la base de datos
  const user = await modelUser.findOne({ email: correo })

  if (user) {
    // comparar la contraseña en texto plano con el hash de contraseña almacenado en la base de datos
    const validPassword = await bcrypt.compare(pass, user.pass);

    if (!validPassword) {
      return next(new Error("Contraseña incorrecta"));
    }

    next()

  } else {
    return next(new Error("No existe este usuario"));
  }

}