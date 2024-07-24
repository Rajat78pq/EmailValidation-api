import express from 'express';
import UserLoginController from '../../Controllers/UserPortalController/Userlogin.service';


const router = express.Router();

router.get('/userportal/', UserLoginController.getUser);
router.post('/userportal/', UserLoginController.createUser);
router.put('/userportal/:id', UserLoginController.updateUser);
router.delete('/userportal/:id', UserLoginController.deleteUser);

export default router;