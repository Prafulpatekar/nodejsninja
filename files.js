const fs = require('fs');

// Reading

fs.readFile(`${__dirname}/docs/blog2.txt`,(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data.toString())
})

// Writting

fs.writeFile(`${__dirname}/docs/blog2.txt`,'HELLO WORLD!!👌👌',()=>{
    console.log("File Done!")
    fs.readFile(`${__dirname}/docs/blog2.txt`,(err,data)=>{
        if(err){
            console.log(err)
        }
        console.log(data.toString())
    })
})

// Dirs
if(!fs.existsSync(`${__dirname}/static`)){
    fs.mkdir(`${__dirname}/static`,(err)=>{
        if(err){
            console.log(err)
        }
        console.log("CREATED")
    })
}else{
    console.log("Alreay exist")
    fs.rmdir(`${__dirname}/static`,(err)=>{
        if(err){
            console.log(err)
        }
        console.log("Deleted Now")
    })
}


// Deleting
if (fs.existsSync(`${__dirname}/docs/blog.txt`)){
    fs.unlink(`${__dirname}/docs/blog.txt`,(err)=>{
        if (err){
            console.log(err);
        }
        console.log("File Deleted!!")
    })
}