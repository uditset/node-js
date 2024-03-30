const constant = require('./script/constants');
const fs =require("fs");
console.log("trying nodemon");

const terminalInputs = process.argv;
console.log(terminalInputs)
if(terminalInputs?.length === 5)
{
    if(terminalInputs?.[2]==="add")
    {
        fs.writeFileSync(terminalInputs?.[3],terminalInputs?.[4])
    }
}
else if(terminalInputs?.length === 4)
{
    if(terminalInputs?.[2]==="remove")
    {
        fs.rmSync(terminalInputs?.[3]);
    }
}
const http = require("http");
http.createServer((req,resp)=>{
   //Defining header of response
   resp.writeHead(200,{"Content-Type": "Application/json"});
   //writing the content in the response;
   resp.write(JSON.stringify(constant));
   resp.end();
}).listen(4500);