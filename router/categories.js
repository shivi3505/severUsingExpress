const express = require('express');
const categories= express.Router();
categories.get('/',(req,res)=>{
    res.end(`<h1>Here is the list of all categories.</h1>`)
})

categories.post('/',(req,res)=>{
    res.end(`<h1>A new category has been added.</h1>`)
})
module.exports= categories;