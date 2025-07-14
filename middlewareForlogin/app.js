const express= require('express');
const app = express();
const port =4000;
const productRoute= require('../router/products')
const categoriesRoute = require('../router/categories')
// app.use((req,res,next)=>{
//     console.log(`${req.method} request made to ${req.url}`);
//     next();
// })
app.use('/products', productRoute);
app.use('/categories', categoriesRoute);

// app.get('/products',(req,res)=>{
//     res.end(`<h1>Here is the list of all products.</h1>`)
// })
// app.post('/products',(req,res)=>{
//     res.end(`<h1>A new product has been added.</h1>`)
// })
// app.get('/categories',(req,res)=>{
//     res.end(`<h1>Here is the list of all categories.</h1>`)
// })
// app.post('/categories',(req,res)=>{
//     res.end(`<h1>A new category has been added.</h1>`)
// })
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})