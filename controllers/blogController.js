// TO do all the logical CRUD operations
const Blog = require('../models/blog');

const blog_index = (req,res)=>{
    res.render('index');
};
const blog_about = (req,res)=>{
    res.render('about');
};
const blog_create_get = (req,res)=>{
    // res.send('<h3>About Page</h3>')
    res.render('create');
};
const blog_create_post = (req,res)=>{
    console.log(req.body);
    // const blog = new Blog({
    //     title:req.body.title,
    //     snippet:res.body.snippet,
    //     body:req.body.body
    // })
    const blog = new Blog(req.body);
    blog.save()
    .then((result)=>{

        res.redirect('/blogs');
    }).catch((err)=>{
        console.log(err);
    });
};

const blog_all_get = (req,res)=>{
    Blog.find()
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    });
};

    
const blog_single_get = (req,res)=>{
    const id = req.params.pkid;
    Blog.findById(id)
    .then((result)=>{
        res.send(result);
    }).catch((err)=>{
        console.log(err);
    });
};
const blog_delete = (req,res)=>{
    const id = req.params.pkid;
    Blog.findByIdAndDelete(id)
    .then((result)=>{
        res.send(result);
    }).catch((err)=>{
        console.log(err);
    });
};

module.exports = {
    blog_index,
    blog_about,
    blog_create_get,
    blog_create_post,
    blog_all_get,
    blog_single_get,
    blog_delete

}