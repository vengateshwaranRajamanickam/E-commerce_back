import express  from 'express';
import mongoose from "mongoose"
//import {app} from './app.js'

// const nodeServer = express();
import cors from "cors";
import * as dotenv from "dotenv";
import {Stackrouter} from './router/Stack.js'
import {Userrouter} from './router/User.js';
import {Companyrouter} from './router/Company.js'
import bodyParser from 'body-parser'
import cookie from 'express-session'
import passport from 'passport'
import './Passport/GoogleAuth.js'
import { OtherLogin } from './router/Otherlogin.js';
dotenv.config();
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

app.use(cookie({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  maxAge: 24 * 60 * 60 * 1000
}))

app.use(passport.initialize()) 
app.use(passport.session())

const MONGO_URL=process.env.MONGO_URL;
const PORT=process.env.PORT

const start = async function() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log('Connected to the database');

    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.error('Error:', error);
  }
};

start();


app.use('/search',Stackrouter)
app.use('/user',Userrouter)
app.use('/company',Companyrouter)
app.use("/auth",OtherLogin)


   

 