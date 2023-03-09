const fs = require('fs');

// Reading

fs.readFile('./docs/blog2.txt',(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data.toString())
})

// Writting

fs.writeFile('./docs/blog2.txt','HELLO WORLD!!👌👌',()=>{
    console.log("File Done!")
    fs.readFile('./docs/blog2.txt',(err,data)=>{
        if(err){
            console.log(err)
        }
        console.log(data.toString())
    })
})

// Dirs
if(!fs.existsSync('./static')){
    fs.mkdir('./static',(err)=>{
        if(err){
            console.log(err)
        }
        console.log("CREATED")
    })
}else{
    console.log("Alreay exist")
    fs.rmdir('./static',(err)=>{
        if(err){
            console.log(err)
        }
        console.log("Deleted Now")
    })
}


// Deleting
if (fs.existsSync('./docs/blog.txt')){
    fs.unlink('./docs/blog.txt',(err)=>{
        if (err){
            console.log(err);
        }
        console.log("File Deleted!!")
    })
}