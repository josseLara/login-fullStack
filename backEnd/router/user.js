import { Router } from "express";
import { putUser, userAccess, validateUserData, validateUserLogin } from "../controller/user.controller.js";
import { comprobartoken, generarToken } from "../utils/token.js";


export const userRouter = Router();

userRouter
.use(comprobartoken)
.put('/',validateUserData,putUser,generarToken)
.post('/',comprobartoken,validateUserLogin,userAccess,generarToken)