import DisposalEmailService from "../../Services/DisposalEmailService/DisposalEmail.service";
import { Request, Response } from "express";

export default class DisposalEmailController {
    static async getDisposalEmail(req: Request, res: Response) {
        const disposalEmail = await DisposalEmailService.getDisposalEmail();
        res.status(200).json(disposalEmail);
    }

    static async getDisposalEmailById(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const disposalEmail = await DisposalEmailService.getDisposalEmailById(id);
        res.status(200).json(disposalEmail);
    }

    static async createDisposalEmail(req: Request, res: Response) {
        const data = req.body;
        const disposalEmail = await DisposalEmailService.createDisposalEmail(data);
        res.status(200).json(disposalEmail);
    }

    static async updateDisposalEmail(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const data = req.body;
        const disposalEmail = await DisposalEmailService.updateDisposalEmail(id, data);
        res.status(200).json(disposalEmail);
    }

    static async deleteDisposalEmail(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const disposalEmail = await DisposalEmailService.deleteDisposalEmail(id);
        res.status(200).json(disposalEmail);
    }

}
