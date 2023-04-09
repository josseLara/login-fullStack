import { check, validationResult } from 'express-validator';
import { addUser, verifyUser } from '../services/user.services.js';

// registrar usuario 
export const putUser = async (req, res,next) => {
    const errors = validationResult(req); //  si los datos de la solicitud son incorrectos
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    addUser(req,res,next);
    
}

// login usuario
export const userAccess = async (req, res, next) => {
    const errors = validationResult(req); //  si los datos de la solicitud son incorrectos
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    verifyUser(req, res, next)
}

// valida los datos de la solicitud
export const validateUserData = [
    check('nombre').notEmpty().withMessage('El nombre es requerido'),
    check('correo').isEmail().withMessage('El correo no es válido'),
    check('pass').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
    check('passRepit').custom((value, { req }) => {
        if (value !== req.body.pass) {
            throw new Error('Las contraseñas no coinciden');
        }
        return true;
    }),
];


export const validateUserLogin = [
    check('correo').isEmail().withMessage('El correo no es válido'),
    check('pass').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres')
];


