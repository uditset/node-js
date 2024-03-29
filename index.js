// import { students } from "./script/constants";
const appConstants = require('./script/constants');
const http = require('http');
const {writeFileSync} = require('fs');
const color = require('colors');
// const chalk = require('chalk').default;
http.createServer((request,response)=>{
    response.write("This node server is running at port 4500");
    response.end();
}).listen(4500);

const a = 10; 
const b = 20;
console.log(a+b);
for(i=1;i<=10;i++)
{
    console.log(i);
}
const students = appConstants?.students;
const dummyVariable = appConstants?.dummyVariable?.t;
const variable = appConstants?.variable;
const constant = appConstants?.constant;
console.log(color.bgMagenta(students));
console.log(dummyVariable);
console.log(variable===20);
console.log(constant===20);
students?.map((item)=>console.log(item?.name));
console.log(students?.filter(item=>item.name==="Udit"));
console.log(variable?.length)
variable?.length && console.log(variable?.filter(item => item.value==20));
writeFileSync("onlyFunction.text","Dobara run kr diya This is my first creating and writting in file test to learn what is non global module.");
console.log(__dirname);
console.log(__filename);