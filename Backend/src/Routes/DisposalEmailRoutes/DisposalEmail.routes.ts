import DisposalEmailController from "../../Controllers/DisposalEmailController/DisposalEmail.controller";
import DisposalEmailMiddleware from "../../Middlewares/DisposalEmailMiddleware/DisposalEmail.middleware";
import express from 'express';

const router = express.Router();

router.get('/disposalEmail/:id', DisposalEmailController.getDisposalEmailById);
router.get('/disposalEmail', DisposalEmailController.getDisposalEmail);
router.post('/disposalEmail', DisposalEmailMiddleware, DisposalEmailController.createDisposalEmail);
router.put('/disposalEmail/:id', DisposalEmailController.updateDisposalEmail);
router.delete('/disposalEmail/:id', DisposalEmailController.deleteDisposalEmail);

export default router;