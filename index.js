const fs = require ("fs");
var express= require("express");


const app = express();


const date = new Date() + ""

// creating file

fs.writeFile("./build/current date_time.txt", date,(error)=> {
    console.log("file created")
})

const PORT = 4000;

app.listen(PORT,()=>console.log(`server is started in ${PORT}`))


app.get("/",(req,res)=>{

    fs.readdir("./build",(err,files)=>{
        console.log(files)
        res.send(files)
        
    })    
     
})

