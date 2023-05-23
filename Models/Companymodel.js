import mongoose from "mongoose";


const CompanySchema=mongoose.Schema({
companyName:{
    type:String,
    required:true
},
vaccancy:{
    type:Number,
    default:0
},
companyImage:{
    data: Buffer, 
    contentType: String 
},
aboutcompany:{
    type:String
}
},
{timestamps: true}
)

export default mongoose.model("Company",CompanySchema)