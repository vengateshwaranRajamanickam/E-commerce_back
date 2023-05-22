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
        type:[Object],
        timestamps: true
    },
   viewcount:{
        type:Number,
        default:0
    },
    votecount:{
        type:Number,
        default:0
    },
    displayname:{
        type:String,
        default:"not mensioned"
    },
     timestamps: true
})

export default mongoose.model("Stack",Stackschema)