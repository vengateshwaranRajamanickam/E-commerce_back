import mongoose from "mongoose"

export const database = async () => {
    try {
      await mongoose.connect("mongodb+srv://vengateshwaran1994:lGCFaxbFgo8iFBPD@cluster0.trow9xu.mongodb.net/?retryWrites=true&w=majority");
      console.log("MongoDB is connected successfully");
    } catch (err) {
      console.error("Error: ", err);
    }
  }; 