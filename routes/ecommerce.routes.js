import express from "express";
import{getproducts,createproducts,deleteproducts,updateproduct} from"../controller/ecommerce.controller.js";
const router=express.Router();
router.get("/",getproducts);
router.post("/",createproducts);
router.delete("/:id",deleteproducts);
router.put("/:id",updateproduct);
export default router;