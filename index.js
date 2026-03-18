import express from "express";

const app = express();
const PORT = 3001;

//MiddleWare
app.use(express.json)

//Home Route
app.get("/",(req,res)=>{
    res.send("Hello from Express")
})

app.get("/contact",(req,res)=>{
    res.send("<h1>contact Page</h1>")
})

app.post("/data",(req,res)=>{
    const userData = req.body;

    res.json({
        message:"Data received fine",
        data: userData
    })
})

//Server
app.listen(PORT,()=>{
    console.log("Server running on 3001 Port");
})