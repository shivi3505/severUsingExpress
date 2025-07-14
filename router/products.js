const express= require('express');
const product = express.Router();
product.get('/',(req,res)=>{
    res.end(`<h1>Here is the list of all products.</h1>`)
})
product.post('/',(req,res)=>{
    res.end(`<h1>A new product has been added.</h1>`)
})
module.exports= product;