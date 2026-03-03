// //fs - file system module //core module
// const fs = require('fs');

// console.log("Start");

// fs.readFile("data.txt","utf8",(err,data)=>{
//     if(err){
//         console.log("Error reading file",err);
//         return;
//     }
//     console.log(data);
// })

// // const data = fs.readFileSync("data.txt","utf8");
// // console.log(data);

// console.log("End");

const fs = require('fs').promises;

async function readData(){
    try{
        const data = await fs.readFile("data.txt","utf8");
        console.log(data);
    } catch(err){
        console.log("Error",err);
    }
}

readData();