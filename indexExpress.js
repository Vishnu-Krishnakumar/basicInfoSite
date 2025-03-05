var fs = require('fs');
const express = require("express");
const app = express();

function fileWrite(fileN,req,res){
    fs.readFile(fileN,function(err,data){
        if(err){
            res.writeHead(400,{'Content-Type':'text/html'});
            return res.end('404 Not Found');
        }
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}

app.get("/",(req,res) =>{
    fileWrite("index.html",req,res);
})
app.get("/about",(req,res)=>{
    fileWrite("about.html",req,res)
})
app.get("/contact",(req,res)=>{
    fileWrite("contact-me.html",req,res);
})
const PORT = 8080;

app.listen(PORT,()=>{

})