import prisma from "../../Configs/db.config";

export default class DisposalEmailService {
    static async getDisposalEmail() {
        return await prisma.disposalEmailTable.findMany();
    }

    static async getDisposalEmailById(id: number) {
        return await prisma.disposalEmailTable.findUnique({ where: { id } });
    }

    static async createDisposalEmail(data: any) {
        await prisma.disposalEmailTable.create({
            data
        })
    }

    static async updateDisposalEmail(id: number, data: any) {
        await prisma.disposalEmailTable.update({
            where: { id },
            data
        })
    }

    static async deleteDisposalEmail(id: number) {
        await prisma.disposalEmailTable.delete({
            where: { id }
        })
    }
}