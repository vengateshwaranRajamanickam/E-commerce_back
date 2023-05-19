import express  from 'express';
//import {app} from './app.js'

// const nodeServer = express();
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();
import database from './DbConfig/mongodb.js'

const PORT=process.env.PORT
const HOST=process.env.HOST 
// nodeServer.listen(PORT,HOST,database)
// nodeServer.use("/",app)

import {Stackrouter} from './router/Stack.js'
import { Userrouter } from "./router/User.js";
import bodyParser from 'body-parser'
export const app = express();
app.use(express.json()) 
app.use(cors());

app.listen(PORT,HOST,database)

app.use('/search',Stackrouter)
app.use('/user',Userrouter)

app.use(bodyParser.json())  //new express js no need bodyparser
app.use(bodyParser.urlencoded({extended:true}))
   

 