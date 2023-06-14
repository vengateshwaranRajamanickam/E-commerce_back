import mongoose from "mongoose";

const User = mongoose.Schema({
    displayname: {
        type: String,
        required: true
    },
    googleAccountId: {
        type: Number
    },
    githubAccountId:{
        type: Number
    },
    facebookAccountId:{
        type: Number
    },
    userEmail: {
        type: String
    }
})

export default mongoose.model("otherlogin", User)  
  