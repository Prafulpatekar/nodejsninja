
exports.createBlogValidator = (res,req,next)=>{
    // For Title
    req.check('title',"Title can't be empty").notEmpty();
    req.check('title',"Title must in between 4 to 120 ").isLenght({
        min:120,
        max:120
    });
    // For Snippet
    req.check('snippet',"Snippet can't be empty").notEmpty();
    // For body
    req.check('body',"Body can't be empty").notEmpty();

    // Check errors
    const errors = req.validationErrors()
    res.status(400).json({
        errors:errors
    })
    // To next middleware
    next();
}
