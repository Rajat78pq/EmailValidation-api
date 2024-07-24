import UserloginService from "../../Services/ UserPortalService/Userlogin.service";
import { Request, Response } from "express";

export default class UserLoginController {

    static async getUser(req: Request, res: Response) {
        const data = req.body
        console.log(data);
        const result = await UserloginService.getUser(data)
        res.send(result)
    }

    static async createUser(req: Request, res: Response) {
        const data = req.body
        const result = await UserloginService.createUser(data)
        res.send(result)
    }

    static async updateUser(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const data = req.body
        const result = await UserloginService.updateUser(id, data)
        res.send(result)
    }

    static async deleteUser(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const result = await UserloginService.deleteUser(id)
        res.send(result)
    }
}