// Third Party
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { urlencoded } = require('express');
const env = require('dotenv');
env.config()
// Project
const blogRoutes = require('./routes/blogRoutes');
const blogControllers = require('./controllers/blogController');

//Express app
const app = express();

// Connecting DB
// mongoose.connect(process.env.MONGOURI || MONGOURI)
mongoose.connect(process.env.MONGOURI)
.then((results)=>{
    console.log("Connected To DB")
    // Listen server req
    const port = process.env.PORT || 3001
    app.listen(port,()=>{
        console.log("We are listening on port 3001")
    });
}).catch((err)=>{
    console.log(err)
});

mongoose.connection.on('error',(err)=>{
    console.log(`There is a error ${err.message}`);
})


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
