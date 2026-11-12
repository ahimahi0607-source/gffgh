import { Router } from "express";


import ProductController from "../controllers/ProductController.js";

const router = Router()


router.get("/", ProductController.GetAll)
router.post("/create" , ProductController.Create);
router.delete("/delete/:id" , ProductController.deleteProduct);
router.patch("/update/:id" , ProductController.updateProduct);



export default router;