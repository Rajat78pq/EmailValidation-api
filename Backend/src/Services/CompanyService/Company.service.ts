import prisma from "../../Configs/db.config";

export default class CompanyService {
    static async getCompany( ) {
        return await prisma.company.findMany();
    }

    static async createCompany(data: any) {
        return await prisma.company.create({ data })

    }

    static async updateCompany(id: number, data: any) {
        await prisma.company.update({
            where: { id },
            data
        })
    }

    static async deleteCompany(id: number) {
        await prisma.company.delete({
            where: { id }
        })
    }
}