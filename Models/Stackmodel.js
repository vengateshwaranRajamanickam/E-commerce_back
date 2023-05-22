import mongoose from "mongoose";
const AnswerSchema = new mongoose.Schema({
    answerText: {
        type: String,
        required: true
    }
}, { timestamps: true });

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
        type:[AnswerSchema],
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
}, 
{timestamps: true}
)

export default mongoose.model("Stack",Stackschema)