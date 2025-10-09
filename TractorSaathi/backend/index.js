const express =require("express");
const mongoose=require("mongoose");
const app = express();
const port = 3000;

main().then((res)=>{
    console.log("database connected successfully");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/tractor');
}

app.use(express.json());
app.use("/api", require("./routes/createUser"));

app.get("/",(req,res)=>{
    res.send("hello satya");
});

app.listen(port,()=>{
    console.log("app is listening on port 3000");
});