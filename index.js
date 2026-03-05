//Path Module
// const path = require('path');
// import path from 'path';

//Path Join Method
// const filePath = path.join(__dirname,"data.txt");

// const filePath = path.join(__dirname);
// const filePath = path.join(__filename);

// const file = "Users/mohitkumar/Desktop/MERN-82/nodejs-app/index.js";

// console.log(path.extname("data.txt"));

// const filePath = path.resolve("files","data.txt");

// console.log(filePath);

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname,"test",'data.txt');

// console.log(filePath);

fs.readFile(filePath,'utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});