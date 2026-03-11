const {EventEmitter} = require("events");

const myEmitter = new EventEmitter();

//Listen Register 
// myEmitter.on("greet",(userName)=>{
//     console.log(`${userName} has logged in`);
// })

// myEmitter.once("greet",(userName)=>{
//     console.log(`${userName} has logged out`);
// })

myEmitter.on("error",(err)=>{
    console.log("Error Occur", err.message);
})

//Event Trigger
myEmitter.emit("error",new Error("something went wrong"));
// myEmitter.emit("greet","Mohit");