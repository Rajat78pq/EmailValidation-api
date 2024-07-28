import { Request, Response } from "express";
import TeamService from "../../Services/TeamService/Team.service";

export default class TeamController {
    static async getTeamById(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const result = await TeamService.getTeamById(id);
        res.send(result);
    }
    static async getTeam(req: Request, res: Response) {
        const result = await TeamService.getTeam();
        res.send(result);
    }

    static async createTeam(req: Request, res: Response) {
        const data = req.body
        const result = await TeamService.createTeam(data);
        res.send(result);
    }

    static async updateTeam(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const data = req.body
        const result = await TeamService.updateTeam(id, data);
        res.send(result);
    }

    static async deleteTeam(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const result = await TeamService.deleteTeam(id);
        res.send(result);
    }
}