import express from 'express';
import CompanyController from '../../Controllers/CompanyController/Company.controller';

const router = express.Router();

router.get('/company', CompanyController.getCompany);
router.post('/company', CompanyController.createCompany);
router.put('/company/:id', CompanyController.updateCompany);
router.delete('/company/:id', CompanyController.deleteCompany);

export default router;