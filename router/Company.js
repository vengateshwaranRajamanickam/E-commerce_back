import express from 'express';
import { CompanyController } from '../Controller/CompanyController.js';
export const Companyrouter = express.Router();

Companyrouter.get('/', CompanyController )

     