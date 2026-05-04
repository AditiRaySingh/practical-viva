import mongoose from "mongoose";
const ecommerceSchema=new mongoose.Schema({
    product:String,
    price:Number,
    category:String,
    title:String
})
const products=mongoose.model("products",ecommerceSchema);
export default products;    

