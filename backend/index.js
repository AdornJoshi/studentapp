const express = require ('express')
const app = new express()
const { model } = require('mongoose');
const studentmodel = require('./model/studentdb')
const cors = require('cors')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())


app.get('/view',(req,res) => {
 res.json("Hii")
})





app.post("/create",(req,res) => {
    var result=new studentmodel(req.body)
    result.save();
    res.send("date added")
})

app.get('/see',async(req,res)=>
{
    var data=await studentmodel.find();
    res.json(data);
})

app.delete('/delete/:id',async(req,res)=>{
    let id=req.params.id
    await studentmodel.findByIdAndDelete(id)
    res.send("data deleted")
})

app.put('/edit/:id',async(req,res)=>{
    console.log(req.body)
      var id=req.params.id;
      await studentmodel.findByIdAndUpdate(id,req.body)
      res.send("updated")  
})

app.listen(3030,(req,res) =>{
    console.log("Port")
})
