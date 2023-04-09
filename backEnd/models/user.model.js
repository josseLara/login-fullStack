import mongoose from "mongoose";

const shemaUser = new mongoose.Schema({
    _id: String,
    name: String,
    img:String,
    email: String,
    pass: String
})

export const modelUser = mongoose.model('Users',shemaUser)