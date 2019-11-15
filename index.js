var express=require("express");
var mysql =require("mysql")
var app=express();
app.get("/",(request,response)=>{
    response.send("student list");
})
app.get("/pass",(request,response)=>{
    response.send("pass student list")
})
app.listen(5000,()=>{
    console.log("server started on port no 5000")
})