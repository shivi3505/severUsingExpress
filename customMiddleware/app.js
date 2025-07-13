const express= require('express');
const app= express();
app.use('/',(req,res,next)=>{
    res.end(`<h1>welcome home</h1>`)
    req.user= 'Guest';
    next();
})
app.get('/welcome',(req,res)=>{
    res.end(`<h1>Welcome,${req.user}</h1>`)
})
app.listen(3000,()=>{
    console.log('Server is up and running on port 3000! Ready to handle requests')
})