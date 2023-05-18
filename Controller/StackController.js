import StackModel from "../Models/Stackmodel.js"

export const Searchdata=async function (req,res, next) {
    try{
            const filterStack=await StackModel.find({})
            return res.status(200).json({success:true,data:filterStack, message: "All Stack Fetched" })
    }
    catch(err){
        return res.status(500).send({ message:err.message })
    }
}

export const UpdateCount=async function (req,res, next) {
    const {id}=req.query;
    const {viewcount,votecount}=req.body; 
    try{
            const filterStack=await StackModel.updateOne({_id:id },{$set:{viewcount:viewcount,votecount:votecount}})
            return res.status(200).json({success:true,data:filterStack, message: "Count updated" })
    }
    catch(err){
        return res.status(500).send({ message:err.message })
    }
}


 