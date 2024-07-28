import express from 'express';
import TeamController from '../../Controllers/TeamController/Team.controller';

const router = express.Router();

router.get('/team/:id', TeamController.getTeamById);
router.get('/team', TeamController.getTeam);
router.post('/team', TeamController.createTeam);
router.put('/team/:id', TeamController.updateTeam);
router.delete('/team/:id', TeamController.deleteTeam);

export default router;