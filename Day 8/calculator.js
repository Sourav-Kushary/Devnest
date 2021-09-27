const express=require("express");
const bodyparser=require("body-parser")
const app=express();
app.use(bodyparser.urlencoded({extended: true}));
app.get("/", function(req,res){
    
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req,res){
    var num1=req.body.num1;
    var num2=req.body.num2;
    var sum=Number(num1)+Number(num2);
    res.send("The sum of the number is "+sum);

});

app.post("/bmiCalculator", function(req,res){
    var h=req.body.height;
    var w=req.body.Weight;
    var bmi=Number(w)/(Number(h)*Number(h));
    res.send("The BMI is "+bmi);
    
});
app.listen(3000, function(){
    console.log("Server running at port 3000");
});