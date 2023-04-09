import express from "express"
import cors from "cors";
import dotenv from "dotenv";
import { userRouter } from "./router/user.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";


dotenv.config()

const port = process.env.PORT || 3001;
const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser());
// route
app.use('/authorization', userRouter)


// controlador de errores
app.use((err,req,res,next)=>{
    let status = err.status || 500;
    res.status(status).json({
        sucess:false,
        status:status,
        message:err.message
    })
})

let bootstrap = async()=>{
    await mongoose.connect(process.env.MONGOURL);
    app.listen(3000,  () => {
        console.log('corriendo')
    })
}

bootstrap();