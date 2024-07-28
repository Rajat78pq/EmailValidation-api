import express from 'express';
import UserLoginController from '../../Controllers/UserPortalController/Userlogin.controller';


const router = express.Router();

router.get('/user/:id', UserLoginController.getUserById);
router.get('/user', UserLoginController.getUser);
router.post('/user', UserLoginController.createUser);
router.put('/user/:id', UserLoginController.updateUser);
router.delete('/user/:id', UserLoginController.deleteUser);

export default router;