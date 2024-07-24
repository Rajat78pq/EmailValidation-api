import prisma from "../../Configs/db.config";

export default class UserloginService {

    static async getUser(data: any) {
        return await prisma.userPortal.findMany({
            where: {
                ...data
            }
        })
    }

    static async createUser(data: any) {
        await prisma.userPortal.create({
            data
        })
    }

    static async updateUser(id: number, data: any) {
        return await prisma.userPortal.update({
            where: { id },
            data
        });
    }

    static async deleteUser(id:number) {
        return await prisma.userPortal.delete({
            where: { id },
        });
    }
}