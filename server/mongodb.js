const mongoose = require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/MoodlejobEmployer")
.then(()=> {

console.log("HI Mongoose");
 
})

.catch(()=> {

    console.log("Unable to connect to Mongoose");

})
  

const LoginSchema= new mongoose.Schema({

CompanyName:{

    type:String,
    required: true
},

CompanyID:{

    type:String,
    required: true
},

email:{

    type:String,
    required: true
},  


Address:{
    type:String,
    required: true
},


Postcode:{
    type:String,
    required: true

},


password:{
    type:String,
    required: true
}

})







const collection = new mongoose.model("collection1",LoginSchema)

module.exports=collection