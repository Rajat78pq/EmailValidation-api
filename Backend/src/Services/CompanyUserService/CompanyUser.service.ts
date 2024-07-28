import prisma from "../../Configs/db.config";

export default class CompanyUserService {
    static async getCompanyUserById(id: number) {
        return await prisma.companyUsers.findUnique({ where: { id } });
    }
    static async getCompanyUsers(id: number) {
        const company = await prisma.company.findUnique(
            {
                where: { id },
                include: { users: { include: { companyUser: true } } },
            }
        );
        return company;
    }

    static async createCompanyUser(data: any) {
        return await prisma.companyUsers.create({
            data
        });
    }

    static async updateCompanyUser(id: number, data: any) {
        return await prisma.companyUsers.update({
            where: { id },
            data
        })
    }

    static async deleteCompanyUser(id: number) {
        return await prisma.companyUsers.delete({
            where: { id }
        })
    }
}