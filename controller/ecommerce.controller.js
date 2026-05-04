import products from "../model/ecommerce.model.js";



// get products 

export const getproducts=async(req,res)=>{
    try{
     const data=await products.find();
     console.log("API hit");
      res.status(200).json(data);
    }
    catch(error)
    {
        console.log("API NOT WORKING");
     res.status(500).json(error);
    }
}
// createproducts

export const createproducts=async(req,res)=>{
    try{
 
        const newProducts=await products.create(req.body);
        console.log("post api hit");
        res.status(201).json(newProducts);

    }
    catch(error)
    {
          console.log("not hit post api");
        res.status(500).json({ error: error.message });
    }

}
// deleteproducts

export const deleteproducts=async(req,res)=>{
    try{
      const id=req.params.id;
      const deleteproduct= await products.findByIdAndDelete(id);
      if(!deleteproduct)
      {
          return res.status(404).json({ message: "Product not found" });
      }
       res.status(200).json({
      message: "Product deleted successfully",
      data: deleteproduct
    });
    }
    catch(error)
    {
         res.status(500).json({ error: error.message });
    }
}


// export const updateproducts=sync(req,res)=>{
//     try{
 
//         const {id}=req.body;
//         const updateprodct=
//     }
//     catch(error)
//     {

//     }
// }