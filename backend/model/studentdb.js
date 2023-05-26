const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Adornjoshi:adorn123@cluster0.wqgpk1v.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log("db connected");
})
.catch(error => console.log("Error"));

let Schema=mongoose.Schema;

const studentschema = new Schema({
    sname:String,
    sgrade:Number
})

var studentmodel = mongoose.model("studs",studentschema)
module.exports = studentmodel 