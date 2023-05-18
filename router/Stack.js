import express from 'express';
import { Searchdata } from '../Controller/StackController.js';
import { UpdateCount } from '../Controller/StackController.js';
export const Stackrouter = express.Router();

Stackrouter.get('/',Searchdata )
Stackrouter.put('/',UpdateCount )
    