import { Request, Response, NextFunction } from "express";
import prisma from "../../Configs/db.config";

const DisposalEmailMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body;
        const checkDisposalEmail = await prisma.disposalEmailTable.findFirst({
            where: {
                email: data.email
            }
        })
        if (checkDisposalEmail) {
            console.log("email already exist");
        } else {
            next();
        }
    } catch (error) {
        console.log(error);
    }

}

export default DisposalEmailMiddleware;