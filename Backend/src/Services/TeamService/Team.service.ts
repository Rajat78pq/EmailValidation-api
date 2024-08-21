import prisma from "../../Configs/db.config";

export default class TeamService {
    static async getTeamById(id: number) {
        return await prisma.team.findUnique({ where: { id } });
    }
    static async getTeam() {
        return await prisma.team.findMany({ include: { company: true } });
    }

    static async createTeam(data: any) {
        return await prisma.team.create({ data });
    }

    static async updateTeam(id: number, data: any) {
        return await prisma.team.update({
            where: { id },
            data
        })
    }

    static async deleteTeam(id: number) {
        return await prisma.team.delete({
            where: { id },
        })
    }
}