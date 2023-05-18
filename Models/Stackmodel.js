import mongoose from "mongoose";


const Stackschema=mongoose.Schema({
    question:{
        type:String,
        required:true
    },
    questiondetail:{
        type:String,
        required:true
    },
    tags:{
        type:[String],
        required:true
    },
    answer:{
        type:[Object]
    },
   viewcount:{
        type:Number
    },
    votecount:{
        type:Number
    },
    displayname:{
        type:String
    }
})

export default mongoose.model("Stack",Stackschema)