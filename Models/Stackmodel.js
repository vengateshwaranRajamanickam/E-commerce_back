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
        create_at:{
            type: Date,
            default: Date.now()
        }
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
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model("Stack",Stackschema)