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
app.use(express.json()) 
app.use(cors());

const PORT=9000
const MONGO_URL=process.env.MONGO_URL
const start = async () => {
  try {
    await mongoose.connect(
        "mongodb+srv://vengateshwaran1994:lGCFaxbFgo8iFBPD@cluster0.trow9xu.mongodb.net/?retryWrites=true&w=majority"
    );
    app.listen(9000, () => console.log("Server started on port 3000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start()
      
    

app.use('/search',Stackrouter)
app.use('/user',Userrouter)

app.use(bodyParser.json())  //new express js no need bodyparser
app.use(bodyParser.urlencoded({extended:true}))
   

 