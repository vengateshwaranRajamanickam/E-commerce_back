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
        create_at:Number
    },
   viewcount:{
        type:Number
    },
    votecount:{
        type:Number
    },
    displayname:{
        type:String
    },
    create_at:{
        type:Number
    }
})

export default mongoose.model("Stack",Stackschema)