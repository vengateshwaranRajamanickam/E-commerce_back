import express  from 'express';
import mongoose from "mongoose"
//import {app} from './app.js'

// const nodeServer = express();
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();
import {Stackrouter} from './router/Stack.js'
import { Userrouter } from "./router/User.js";
import {Companyrouter} from './router/Company.js'
import {OtherLogin} from './router/Otherlogin_Router.js'
import bodyParser from 'body-parser'
import cookie from 'express-session'
import passport from 'passport'
import './Passport/GoogleAuth.js'

// nodeServer.listen(PORT,HOST,database)
// nodeServer.use("/",app)

export const app = express();
app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "500mb" }))

app.use(
  cors({
    origin: "https://eloquent-daffodil-94482d.netlify.app",
    methods: "GET,POST,PUT,DELETE",
    credentials: true
  })
);

const PORT=process.env.PORT
app.use(cookie({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  maxAge: 24 * 60 * 60 * 1000
}))

app.use(passport.initialize()) 
app.use(passport.session())

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL); 
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
 
start()
      
    

app.use('/search',Stackrouter)
app.use('/user',Userrouter)
app.use('/company',Companyrouter)
app.use("/auth",OtherLogin)


   

 