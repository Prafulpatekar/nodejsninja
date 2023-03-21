// Standard
const http = require('http');
const fs = require('fs');
// Thrid Party
const _ = require('lodash');

const server = http.createServer((req,res)=>{
    // console.log(req.url,req.method)
    // Lodash
    const num = _.random(0,20);
    console.log(num)

    const greet = _.once(()=>{
        console.log("HEllo")
    });
    greet();
    greet();

    // Set Headers

    
    // res.write('<h1>Helo Universe !!</h1>');
    fs.readFile('./views/index.html',(err,data)=>{
        if(err){
            res.setHeader('Content-Type','application/json');
            console.log(err)
            return res.end(err);
        }else{
            res.setHeader('Content-Type','text/html');
            res.write(data);
            return res.end();
        }

    })
    
})

server.listen(3000,'localhost',()=>{
    console.log("Listening to requests on port 3000");
})