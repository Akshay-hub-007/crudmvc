const express=require("express");
const router = require("./routes/student");
const connectDb = require("./db");

const cors = require("cors");


const app=express();
app.use(cors());
app.use(express.json())
connectDb()
app.use("/api",router)

app.listen(3000,()=>{
    console.log("port is runing")
})
