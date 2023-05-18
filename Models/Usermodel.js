import mongoose from "mongoose";


const Createuser=mongoose.Schema({
    displayname:{
        type:String,
        required:true
    },
    hashedPassword:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,
        required:true
    }
})

export default mongoose.model("user",Createuser)


// const Customer = mongoose.model(
//     'Customer', customerSchema);
  
// Customer.create({ name: 'Rahul', orderCount: 5 })
//     .then(result => {
//         console.log(result)
//     })