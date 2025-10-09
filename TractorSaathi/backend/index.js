const express =require("express");
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("hello satya");
});

app.listen(port,()=>{
    console.log("app is listening on port 3000");
});