import express from "express";

const app = express();

// const logger = (req,res,next) =>{
//     console.log(`METHOD: ${req.method} url: ${req.url}`);
//     next();
// }
app.use(express.json());
app.use(express.urlencoded({extended:true}));

let users=[
    {id:1,name:"Mohit"},
    {id:2,name:"Rohit"}
]

app.get("/users",(req,res)=>{
    res.json(users)
})

app.post("/form", (req, res) => {
    console.log("Headers:", req.headers);
    console.log("Body:", req.body);
    res.send("Done");
});

app.listen(3001,()=>{
    console.log("Server is running on port 3001");
    
})