const express = require("express");

const Product= require("../database-mysql");
// const translateRoute = require("./routes/Rbrowses");
const translateRoute2 = require("./routes/Rcategories");
const translateRoute3 =require("./routes/Rproduct")
const cors = require("cors")

const app = express();
const PORT = 5000;
app.use(cors())

app.use(express.json());

// app.use("/api/browse",translateRoute)
app.use("/api/categories",translateRoute2)
app.use("/api/product",translateRoute3)

app.get('/get',(req,res)=>{
  res.send("hello")
})


app.post("/login",(req,res)=>{
  Product.User.create(req.body)
  .then((result)=>{
    res.send(result)
  }).catch((err)=>{
    console.log(err);
  })
})


app.listen(5000, () => {
  console.log(`listening on port ${PORT}`);
});

