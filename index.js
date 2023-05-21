import express  from 'express';
import mongoose from "mongoose"
//import {app} from './app.js'

// const nodeServer = express();
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();
import {Stackrouter} from './router/Stack.js'
import { Userrouter } from "./router/User.js";
import bodyParser from 'body-parser'

// nodeServer.listen(PORT,HOST,database)
// nodeServer.use("/",app)

export const app = express();
app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "500mb" }))
app.use(cors());

const PORT=process.env.PORT
const MONGO_URL=process.env.MONGO_URL

const start = async () => {
  try {
    await mongoose.connect("mongodb+srv://vengateshwaran1994:lGCFaxbFgo8iFBPD@cluster0.trow9xu.mongodb.net/?retryWrites=true&w=majority"); 
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
 
start()
      
    

app.use('/search',Stackrouter)
app.use('/user',Userrouter)


   

 