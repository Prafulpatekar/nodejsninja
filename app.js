// Third Party
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { urlencoded } = require('express');

// Project
const blogRoutes = require('./routes/blogRoutes');
const blogControllers = require('./controllers/blogController');

//Express app
const app = express();

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


// Register view engine
app.set('view engine','ejs');

// Middleware for static files
app.use(express.static('public'));

// Parse data from html form
app.use(urlencoded({extended:true}));

// console.log middleware
app.use(morgan('dev'));

app.get('/',blogControllers.blog_index);

// Routing
app.get('/about',blogControllers.blog_about);

// Middleware for blog Routers
app.use('/blogs',blogRoutes);

// 404 Page
app.use((req,res)=>{
    res.render('404')
});
