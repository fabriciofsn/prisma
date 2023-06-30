"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findByEmail = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class FindByEmail {
    async users(req, res) {
        const { email } = req.body;
        try {
            const users = await prisma.user.findUnique({
                where: {
                    email,
                },
            });
            res.json(users);
        }
        catch (error) {
            if (error)
                console.log(`Ocorreu um erro ${error}`);
        }
    }
}
exports.findByEmail = new FindByEmail();
