const os = require('os');

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.totalmem() /1024 / 1024 / 1024 + ' GB');
// console.log(os.freemem());
// console.log(os.cpus());
console.log(os.userInfo());
console.log(os.hostname());
//Sytem uptime
console.log(os.uptime() / 60 / 60 + ' hours');