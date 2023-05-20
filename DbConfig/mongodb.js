import mongoose from "mongoose"

export default mongoose.connect("mongodb+srv://vengateshwaran1994:lGCFaxbFgo8iFBPD@cluster0.trow9xu.mongodb.net/?retryWrites=true&w=majority")
.then(res=>console.log(res))
.catch(err=>console.log(err))


   