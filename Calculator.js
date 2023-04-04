
const express = require("express");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended : true}));

// HOME ROUTE

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

    var rBody = req.body;
    res.send("Sum of the numbers is " + (Number(rBody.num1) + Number(rBody.num2)));

});

// BMI CALCULATOR ROUTE 

app.get("/bmiCalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res){

    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight/(height*height);
    res.send("Your BMI is " + bmi);
    
});

app.listen(3000, function(){
    console.log("Server running on port 3000...");
});