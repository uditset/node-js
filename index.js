const fs = require("fs");
const path = require("path");
fs.writeFileSync("random11.txt","Hey bro sup");
const dirName = path.join(__dirname,"crud files");
//  fs.writeFileSync(dirName + "/random11.txt","Hey bro sup in crud files folder.");
//  for(i=0;i<3;i++)
//  {
//      fs.writeFileSync(dirName + `/random${i}.txt`,`Hey bro sup ${i} in crud files folder.`);
//  }

fs.readFile(dirName+ `/random1.txt`,(error,item)=>{
    console.log(item);
})

fs.appendFile(dirName+ `/random0.txt`," so this is after updating bro.",err => console.log(!err ? "file is updated successfully" : "there is some error in appending in the file."));
fs.rename(dirName+ `/random0.txt`,dirName+ `/random00.txt`,err => console.log(!err ? "file renamed successfully" : "there is some error in renaming the file."));