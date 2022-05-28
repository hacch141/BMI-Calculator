const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res){
    
    var v1 = Number(req.body.num1);
    var v2 = Number(req.body.num2);
    var result = v1+v2;
    res.send("Sum of num1 and num2 is : "+result);
})

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight/(height*height);
    res.send("Your BMI is : "+bmi);
})

app.listen(3000, function(){
    console.log("Your calculator is successfully running on port 3000.")
});