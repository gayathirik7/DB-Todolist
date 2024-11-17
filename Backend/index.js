const express=require("express")
const cors=require("cors")
const mongoose =require("mongoose")
const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/fruitlist").then(()=>console.log("db sucessfull")).catch(()=>console.log("Db failed"))
const Fruit=mongoose.model("fruit",{name:String},"fruit")
app.get("/fruitlist",function(req,res){
    Fruit.find().then((retdata)=>{
        console.log(retdata)
        res.send(retdata)
    })

})
app.post("/addfruit",function(req,res){
    var newfruit=req.body.newfruit
    const newFruit= new Fruit
    (
        {
        name:newfruit
    })
    newFruit.save().then(()=>console.log("Saved successfully"))
})
app.listen(5000,()=>{
    console.log("Server  started...")
})