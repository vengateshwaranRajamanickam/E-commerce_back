import express from 'express';
import { Searchdata,UpdateCount,Createdata,Questiondetail,Answerdetail } from '../Controller/StackController.js';
export const Stackrouter = express.Router();

Stackrouter.get('/',Searchdata )
Stackrouter.put('/',UpdateCount )
Stackrouter.get('/question',Questiondetail )
Stackrouter.put('/answer',Answerdetail )
Stackrouter.post('/addquestion',Createdata )
    