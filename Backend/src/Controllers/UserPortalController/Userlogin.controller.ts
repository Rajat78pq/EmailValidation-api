import UserLoginService from "../../Services/ UserPortalService/Userlogin.service";
import { Request, Response } from "express";

export default class UserLoginController {

    static async getUserById(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const result = await UserLoginService.getUserById(id)
        res.send(result)
    }

    static async getUser(req: Request, res: Response) {

        const result = await UserLoginService.getUser()
        res.send(result)
    }

    static async createUser(req: Request, res: Response) {
        const data = req.body
        const result = await UserLoginService.createUser(data)
        res.send(result)
    }

    static async updateUser(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const data = req.body
        const result = await UserLoginService.updateUser(id, data)
        res.send(result)
    }

    static async deleteUser(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const result = await UserLoginService.deleteUser(id)
        res.send(result)
    }
}