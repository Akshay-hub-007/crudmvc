const mongoose=require("mongoose")

const schema=mongoose.Schema({
    id:{
        type:String
    },
    name:{
        type:String,
    },
    age:{type:Number},
    grade:{
        type:Number
    }
})

module.exports=mongoose.model("Student",schema)