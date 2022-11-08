const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req,res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1+num2;

  res.send("The result of the calculation is "+result);
});

app.get("/bmi", function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmi", function(req,res){
  var w= Number(req.body.w);
  var h= Number(req.body.h);
  var bmi = Math.round((w/(h*h)));

  res.send("Your BMI is "+bmi);
})

app.listen(3000, function(){
  console.log("Server started at port 3000");
});
