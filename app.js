import express from "express"
import path from "path"
import fileUpload from "express-fileupload"

import connectDB from "./scr/config/db.js"


const app = express()

connectDB()

app.use(express.json())

const PORT = 5000

app.listen(PORT, ()=>{
    console.log("Сервис успешно запущен на порту: " + PORT);
    
})