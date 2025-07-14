const express = require('express');
const bookRoute = express.Router();

bookRoute.get('/',(req,res)=>{
    console.log(`${req.method} request called`);
    res.send(`<h1>Here is the list of books!</h1>`);
})
bookRoute.post('/',(req,res)=>{
    const bookData = req.body;
    console.log(`${req.method} called with ${bookData}`);
    res.send(`<h1>Book has been added!</h1>`);
})

module.exports = bookRoute;