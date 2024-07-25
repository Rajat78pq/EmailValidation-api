import CompanyService from "../../Services/CompanyService/Company.service";
import { Request, Response } from "express";

export default class CompanyController {
    static async getCompany(req: Request, res: Response) {
        const result = await CompanyService.getCompany();
        res.send(result);
    }

    static async createCompany(req: Request, res: Response) {
        const data: {
            name: string
            user: {
                connect: {
                    id: number
                }
            }
        } = req.body;
        const result = await CompanyService.createCompany(data);
        res.send(result);
    }

    static async updateCompany(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const data = req.body;
        const result = await CompanyService.updateCompany(id, data);
        res.send(result);
    }

    static async deleteCompany(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const result = await CompanyService.deleteCompany(id);
        res.send(result);
    }
}