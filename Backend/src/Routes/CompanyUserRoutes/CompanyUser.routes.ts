import express from 'express';
import CompanyUserController from '../../Controllers/CompanyUserController/CompanyUser.controller';
import CompanyMiddleware from '../../Middlewares/CompanyMiddleware/Company.middleware';


const router = express.Router();

router.get('/company/:companyid/user/:id', CompanyMiddleware, CompanyUserController.getCompanyUserById);
router.get('/company/:companyid/user', CompanyMiddleware, CompanyUserController.getCompanyUsers);
router.post('/company/:companyid/user', CompanyMiddleware, CompanyUserController.createCompanyUser);
router.put('/company/:companyid/user/:id', CompanyMiddleware, CompanyUserController.updateCompanyUser);
router.delete('/company/:companyid/user/:id', CompanyMiddleware, CompanyUserController.deleteCompanyUser);

export default router;