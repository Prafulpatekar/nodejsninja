// TO do all the logical CRUD operations
const Blog = require('../models/blog');

exports.blog_create_post = (req,res)=>{
    const blog = new Blog(req.body);
    blog.save()
    .then((result)=>{
        res.status(200).json({
            data:result
        });
    }).catch((err)=>{
        res.status(400).json({
            error:err
        });
    });
};

exports.blog_all_get = (req,res)=>{
    Blog.find()
    .select("title snippet body")
    .then((result)=>{
        res.status(200).json({
            data:result
        });
    })
    .catch((err)=>{
        res.status(400).json({
            error:err
        });
    });
};

    
exports.blog_single_get = (req,res)=>{
    const id = req.params.pkid;
    Blog.findById(id)
    // .select("title snippet body")
    .then((result)=>{
        res.status(200).json({
            data:result
        });
    }).catch((err)=>{
        res.status(404).json({
            error:err
        });
    });
};

exports.blog_delete = (req,res)=>{
    const id = req.params.pkid;
    Blog.findByIdAndDelete(id)
    .then((result)=>{
        res.status(200).json({
            data:`Blog with id "${result._id}" has been deleted`
        });
    }).catch((err)=>{
        res.status(400).json({
            error:err
        });
    });
};

