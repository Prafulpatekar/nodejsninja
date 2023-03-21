const fs = require('fs');

const errHandler = err => console.log(err);
const dataHandler = data => console.log(data.toString());

// Watching file for any change
fs.watch(`${__dirname}/docs/blog2.txt`,(err,data)=>{
    if(err) errHandler(err);
    dataHandler(data);
})

// Writting
fs.writeFile(`${__dirname}/docs/blog2.txt`,'HEsLLO WORLDhh!!👌👌',()=>{
    console.log("File Done!")
    // Reading
    fs.readFile(`${__dirname}/docs/blog2.txt`,(err,data)=>{
        if(err) errHandler(err);
        dataHandler(data);
    });
    
});

// Dirs
if(!fs.existsSync(`${__dirname}/static`)){
    fs.mkdir(`${__dirname}/static`,(err)=>{
        if(err) errHandler(err);
        console.log("CREATED")
    })
}else{
    console.log("Alreay exist")
    fs.rmdir(`${__dirname}/static`,(err)=>{
        if(err) errHandler(err);
        console.log("Deleted Now")
    })
}


// Deleting
if (fs.existsSync(`${__dirname}/docs/blog.txt`)){
    fs.unlink(`${__dirname}/docs/blog.txt`,(err)=>{
        if(err) errHandler(err);
        console.log("File Deleted!!")
    })
}