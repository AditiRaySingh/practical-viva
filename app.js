import express from "express";
import mongoose from "mongoose";
import ecommerceRoutes from "./routes/ecommerce.routes.jsc"
import authRoutes from "./routes/authRoutes.js"
import dotenv from "dotenv";


dotenv.config();

const app=express();
app.use(express.json());
console.log("JWT SECRET:", process.env.JWT_SECRET);
const PORT=process.env.PORT||4000;
const URL=process.env.MongoDBURL;


console.log("URL:", process.env.MongoDBURL);
const connectDB=async()=>{
    try{
     await mongoose.connect(URL);
     console.log("mongodb connect");
    }
    catch(error)
    {
        console.log(error.message);
     process.exit(1);
    }
}
connectDB();

app.use("/",productsRoutes);
app.use("/api/auth", authRoutes);

app.use("/api/products", productRoutes);


app.listen(PORT,()=>{
    console.log(`server is listening at the port ${PORT}`)
})