const express = require('express');
const app = express();
const constObject = require("./script/constants");
const path = require("path")
const port = 10000;
const pagesPath = path.join(__dirname,"pages");

app.listen(port,()=> console.log(`App is running on the port ${port}`));
app.set('view engine','ejs');

// app.use(express.static(pagesPath));


app.get("/",(req,response)=>{
    response.sendFile(pagesPath + "/index.html");
})

app.get("/aboutUs",(req,response)=>{
    response.sendFile(pagesPath + "/aboutUs.html");
})

app.post("/aboutUs",(req,resp)=>{
    console.log("recieved request:       ");
    console.log(req);
    resp.status(200);
    resp.json(constObject);
})

app.get("/profile",(req,resp)=>{
    const user = {
        name: "Udit sethi",
        designation: "Software Engineer",
        Company: "Amazon",
        techList: ["Java" , "ReactJs" , "NodeJs" , "MongoDb" , "Spring Boot"],
    }
    resp.render("profile",{user});
})

app.get('/helpus',(_,resp)=>{
    resp.render('helpus');
})

app.get("*",(_,resp)=>{
    resp.status(404).sendFile(pagesPath + "/pageNotFound.html");
})



