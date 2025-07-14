const express = require('express');
const app = express();
const port= 3000;
const bookRouter =  require('../router/book')
app.use(express.json());
app.use('/books', bookRouter);

app.listen(port,()=>
{
    console.log(`serevr is running on http://localhost:${port}`)
})