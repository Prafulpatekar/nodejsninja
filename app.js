const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

// Connecting DB
const db = "mongodb+srv://prafulcoder:Coder.2000$23@nodejsninja.be8rcgc.mongodb.net/nodejstuts?retryWrites=true&w=majority"; 
mongoose.connect(db)
.then((results)=>{
    console.log("Connected To DB")
    // Listen server req
    app.listen(3001);
}).catch((err)=>{
    console.log(err)
});
//Express app
const app = express();

// Register view engine
app.set('view engine','ejs');



// Middleware for static files
app.use(express.static('public'));

app.use(morgan('dev'));

app.get('/',(req,res)=>{
    res.render('index');
});

// Routing
app.get('/about',(req,res)=>{
    // res.send('<h3>About Page</h3>')
    res.render('about');
});

// redirect
app.get('/create',(req,res)=>{
    // res.send('<h3>About Page</h3>')
    res.render('create');
});

// 404 Page
app.use((req,res)=>{
    res.render('404')
});
