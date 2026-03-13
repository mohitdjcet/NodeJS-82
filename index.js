// function loginUser(callback){
//     setTimeout(()=>{
//         console.log("User Logged in")
//         callback();
//     },3000);
// }

// function getProfile(callback){
//     setTimeout(()=>{
//         console.log("getProfile")
//         callback();
//     },3000);
// }

// function getPost(callback){
//     setTimeout(()=>{
//         console.log("getPost")
//         callback();
//     },3000);
// }

// loginUser(()=>{
//     getProfile(()=>{
//         getPost(()=>{
//             console.log("All Task Done")
//         })
//     })
// })

function step1(){
    return Promise.resolve("Step 1 completed")
}
function step2(){
    return Promise.resolve("Step 2 completed")
}
function step3(){
    return Promise.resolve("Step 3 completed")
}

step1().then((result)=>{
    console.log(result);
    return step2();
}).then((result)=>{
    console.log(result);
    return step3();
}).then((result)=>{
    console.log(result);
})