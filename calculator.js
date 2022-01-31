//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
// bodyParser.urlencoded is used for processing files from .html files, body-parser parses http requests
app.get("/",function(req,res){
res.sendFile(__dirname + "/index.html");
//__dirname + "/index.html" provides a directory file through the current location which is calculator.js appending to index.html where we have
//created our calculator.
});

app.post("/", function(req,res){

var num1 = Number( req.body.n1);
var num2 = Number(req.body.n2);
var result = num1 + num2;
  res.send("The result is "  + result);
});

app.listen(3000,function(){
  console.log("Server is up on port 3000");
});
