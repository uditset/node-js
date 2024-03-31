const express = require('express');
const app = express();
const constObject = require("./script/constants");
const path = require("path")
const port = 10000;
const pagesPath = path.join(__dirname,"pages");

app.listen(port,()=> console.log(`App is running on the port ${port}`));

app.use(express.static(pagesPath));


app.get("/",(req,response)=>{
    response.send(`
        <div style="background: orange;">
            <h1>This is the home page</h1>
            <label for="name"> Name </label>
            <input type="text" placeholder="Enter your name" id="name" name="name" style="border: 1px solid blue">
            <a href="/aboutus">About us</a>
            <a href="/">Home</a>
        </div>
    `);
})

app.get("/aboutUs",(req,response)=>{
    response.send(`
    <div>
        This is the About us page
        <a href="/">Home</a>
    </div>
    `);
})

app.post("/aboutUs",(req,resp)=>{
    console.log("recieved request:       ");
    console.log(req);
    resp.status(200);
    resp.json(constObject);
})

