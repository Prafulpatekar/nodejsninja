const express = require('express');

//Express app
const app = express();

// Listen server req
app.listen(3000);

app.get('/',(req,res)=>{
    res.send('<h3>HELEHNDODJKDLJ</h3>')
})

