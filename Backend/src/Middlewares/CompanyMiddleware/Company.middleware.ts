import { Request, Response, NextFunction } from "express";
import prisma from "../../Configs/db.config";


const CompanyMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const id = parseInt(req.params.companyid);
    try {
        const company = await prisma.company.findUnique({
            where: {
                id: id
            }
        })
        // console.log(company);
        if (!company) {
            return res.status(404).json({
                message: "Company not found"
            })
        }
        next();
    } catch (e) {
        console.log(`middleware error ${e}`);
    }
}

export default CompanyMiddleware;