const express = require('express');

//Express app
const app = express();

// Listen server req
app.listen(3001);

app.get('/',(req,res)=>{
    res.sendFile('./views/index.html',{root:__dirname});
});

// Routing
app.get('/about',(req,res)=>{
    // res.send('<h3>About Page</h3>')
    res.sendFile('./views/about.html',{root:__dirname});
});

// redirect
app.get('/about-us',(req,res)=>{
    // res.send('<h3>About Page</h3>')
    res.redirect('/about')
});

// 404 Page
app.use((req,res)=>{
    res.sendFile('./views/404.html',{root:__dirname})
});
