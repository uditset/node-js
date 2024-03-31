const http = require('http');
const constant = require("./script/constants");
http.createServer((req,resp)=>{
    resp.writeHead(200,{"content-type":"application/json"});
    resp.write(JSON.stringify(constant));
    resp.end();
}).listen(50000);

const promiseObj = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("error hai");
    },5000);
})
console.log(y);
let y;
promiseObj.then((item)=>console.log(item)).catch(error => console.log(error));
console.log("Hey baby");