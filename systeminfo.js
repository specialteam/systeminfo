// example script to show system info //
// writed by amir special @sudo1 //
var os = require('os');
console.log("Platform: " + os.platform());
console.log("uptime: " + os.uptime() + "second");
console.log("cpu arch:" + os.arch());
console.log("system name:" + os.type());
console.log("total memory:" + os.totalmem() + " byte")
console.log("free memoey:" + os.freemem() + " byte");
