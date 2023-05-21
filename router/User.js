import express from 'express';
import {Createuser,Reset,Login,Verifypassword} from '../Controller/UserController.js'

export const Userrouter = express.Router();

Userrouter.post('/signup', Createuser)
Userrouter.post('/resetpassword', Reset)
Userrouter.post('/verifypassword',Verifypassword)
Userrouter.post("/login", Login)

