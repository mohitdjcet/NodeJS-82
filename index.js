import axios from "axios";

async function getUsers(){
    try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log("User Data:");
        console.log(res.data);
    } catch (error){
        console.log("Error",error.message); 
    }
}

getUsers()