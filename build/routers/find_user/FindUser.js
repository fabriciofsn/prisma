"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUser = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class FindUser {
    async user(req, res) {
        const users = await prisma.user.findMany();
        users.map((user) => {
            return res.json({
                id: user.id,
                nome: user.name,
                email: user.email,
                CPF: user.CPF,
            });
        });
    }
}
exports.findUser = new FindUser();
