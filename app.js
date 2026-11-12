import express from "express"
import path from "path"
import fileUpload from "express-fileupload"

import connectDB from "./scr/config/db.js"

import productRoutes from "./scr/routes/productRoutes.js"
import Product from "./scr/models/Product.js"


const app = express()

connectDB()

app.use(express.json())


app.use("/api/product" , productRoutes)

const PORT = 5000

app.listen(PORT, ()=>{
    console.log("Сервис успешно запущен на порту: " + PORT);
    
})