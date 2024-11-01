const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const upload = require("./fileUpload");
const app = express();
const PORT = 4001;
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://localhost:27017/Shopping");

const Products = require("./DataBase/Products");
const Users = require("./DataBase/User");

app.post("/userregister", async (req, res) => {
  const user = new Users(req.body);
  const result = await user.save();
  res.send(result);
});


app.post("/addproduct", async (req, res) => {
  let products=await Products.find({});
  let id;
  if(products.length>0){
    let last_product_array=products.slice(-1);
    let last_product=last_product_array[0];
    id=last_product.id+1;
  }
  else{
    id=1;
  }
  const product = new Products({
    id: id,
    name: req.body.name,
    image: req.body.image,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
    date: req.body.date,
    category: req.body.category,
  
  });
 console.log(product);
  await product.save();
  console.log("Saved");
  res.json({
    success: true,
    name: req.body.name,
  });
});

//Creating API for deleting products

app.post("/removeproduct",async(req,res)=>{
  await Products.findOneAndDelete({id:req.body.id});
  console.log("Deleted");
  res.json({
    success: true,
    name: req.body.name,
  });
})

// Creating api for getting all products

app.get('/allproducts',async(req,res)=>{
  let products=await Products.find({});
  console.log("All products Fetched");
  res.send(products);
})


app.get("/", (req, res) => {
  res.send("Good Morning !!!!!!!!!!");
});

app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: 0, message: "No file uploaded" });
  }
  console.log("File uploaded: ", req.file);
  res.json({
    success: 1,
    image_url: `http://localhost:4001/images/${req.file.filename}`,
  });
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Server is Running on port ${PORT}`);
  } else {
    console.log("Error Occurred");
  }
});
