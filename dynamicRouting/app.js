const express = require('express');
const app = express();
const port= 3000;
app.use(express.json());
app.get('/',(req,res)=>{
    res.send(`<h1> Wlcome Home`)
})

app.get('/welcome/:username',(req,res)=>{
    const userName= req.params.username;
    const roleOfUser = req.query.role;
    res.send(`<h1> Wlcome ${userName},your role is ${roleOfUser}</h1>`);
})
app.listen(port,()=>{
    console.log(`server is running on http://localhost/${port}`);
})