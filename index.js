const fs = require('fs');

// fs.writeFileSync('data.txt', "This is sync Write")
  
// console.log("File created successfully");

// fs.appendFile('data.txt', " This is async append\nABCD", (err) => {
//     if (err) {
//         console.error("Error appending to file:", err);
//     } else {
//         console.log("Data appended successfully");
//     }
// });

fs.unlink('data.txt', (err) => {
    if (err) {
        console.error("Error deleting file:", err);
    } else {
        console.log("File deleted successfully");
    }
});