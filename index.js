const fs = require ("fs");
var express= require("express");


const app = express();


const date = new Date() + ""

// creating file

fs.writeFile("./build/current date_time.txt", date,(error)=> {
    console.log("file created")
})

//Take Random port ;

const PORT = process.env.PORT;

app.listen(PORT,()=>console.log(`server is started in ${PORT}`))

//Api to read files from directory

app.get("/",(req,res)=>{

    fs.readdir("./build",(err,files)=>{
        console.log(files)
        res.send(files)
        
    })
     
})

