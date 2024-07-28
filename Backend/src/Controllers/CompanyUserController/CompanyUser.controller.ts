import CompanyUserService from "../../Services/CompanyUserService/CompanyUser.service";
import { Request, Response } from "express";

export default class CompanyUserController {

    static async getCompanyUserById(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const result = await CompanyUserService.getCompanyUserById(id)
        res.send(result)
    }

    static async getCompanyUsers(req: Request, res: Response) {
        const id = parseInt(req.params.companyid);
        const result = await CompanyUserService.getCompanyUsers(id);
        res.send(result);
    }

    static async createCompanyUser(req: Request, res: Response) {
        const data = req.body;
        const result = await CompanyUserService.createCompanyUser(data)
        res.send(result)
    }

    static async updateCompanyUser(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const data = req.body
        const result = await CompanyUserService.updateCompanyUser(id, data)
        res.send(result)
    }

    static async deleteCompanyUser(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const result = await CompanyUserService.deleteCompanyUser(id)
        res.send(result)
    }
}