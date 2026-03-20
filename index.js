import express from "express";

const app = express();

app.use(express.json());

let users=[
    {id:1,name:"Mohit"},
    {id:2,name:"Rohit"}
]

app.delete("/delete-user/:id",(req,res)=>{
    const userId = parseInt(req.params.id);
    const newUser = users.filter(u => u.id !== userId);

    if(newUser.length !== users.length){
        users = newUser;

        res.json({
            message: "User deleted Successfully",
            users
        })
    } else{
        res.status(404).json({
        message:"User Not Found"
        })
    }
})

app.put("/update-user/:id",(req,res)=>{
    const userId = parseInt(req.params.id);
    const newName = req.body.name;

    const user = users.find(u => u.id === userId);

    if(user){
        user.name = newName;

        res.json({
            message:"User Updated fine",
            users
        });
    } else {
        res.status(404).json({
            message:"User Not Found"
        })
    }
})

app.post("/add-user",(req,res)=>{
    const user = req.body;

    res.json({
        message:"User added successfully",
        user:user
    })
})

app.get("/",(req,res)=>{
    res.send("Welcome to Home Page")
})

app.get("/users",(req,res)=>{
    res.json(users)
})

app.get("/search",(req,res)=>{
    const name = req.query.name;
    res.send(`Seraching for ${name}`)
})

app.listen(3001,()=>{
    console.log("Server is running on port 3001");
    
})