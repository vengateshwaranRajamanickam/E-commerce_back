import CompanyModel from "../Models/Companymodel.js"

export const CompanyController=async function (req,res, next) {
    try{
            const filtercompany=await CompanyModel.find({})
            return res.status(200).json({success:true,data:filtercompany, message: "All Company detail fetched" })
    }
    catch(err){
        return res.status(500).send({ message:err.message })
    }
}
