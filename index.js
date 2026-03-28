import express from "express";
import { MongoClient } from "mongodb";

const app = express();
const PORT = 5001;

//MongoDB URL
const url = "mongodb://localhost:27017";

//Create Client
const client= new MongoClient(url);

//DB NAME
const dbName = "myApp";

let db;

//Connect to MongoDB
async function connectDB(){
    try{
        await client.connect();
        console.log("MD Connected");
        db = client.db(dbName)
    } catch(err){
        console.log("Connection Error:", err)
    }
}

//Route
app.get("/", async (req,res)=>{
    const users = await db.collection("users").find().toArray();
    res.json(users);
})

//Server start
app.listen(PORT, async ()=>{
    await connectDB();
    console.log("server is running port", PORT)
})