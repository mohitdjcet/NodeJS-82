import express from 'express';

const app = express();

// //Static folder path
// app.use(express.static("public"));

// app.get("/",(req,res)=>{
//     throw new Error("Something went wrong")
// })

// //Error Middleware
// app.use((err,req,res,next)=>{
//     console.log(err.message);

//     res.status(500).json({
//         message:"Internal Server Error"
//     })
// }) 

app.get("/",(req,res)=>{
    res.status(200).send("Sucesss")
})

app.get("/not-found",(req,res)=>{
    res.status(401).json({
        message:"Page Not Found"
    })
})

app.get("/error",(req,res)=>{
    res.status(500).json({
        message:"Internal server ereror"
    })
})

app.listen(3001);

//Range: 1**-Informatinal
//2**-Sucess
//3**-Redirect
//4**-Client Error
//5**- Server Error
