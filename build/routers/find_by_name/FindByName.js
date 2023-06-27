"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findByName = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class FindByName {
    async usersName(req, res) {
        let { name } = req.params;
        try {
            const names = await prisma.user.findMany({
                where: {
                    name,
                },
            });
            const userName = names.map((name) => {
                return { name };
            });
            res.json(userName);
        }
        catch (error) {
            if (error)
                console.log(`Ocorreu um erro ${error}`);
        }
    }
}
exports.findByName = new FindByName();
