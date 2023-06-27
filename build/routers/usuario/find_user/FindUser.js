"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUser = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class FindUser {
    async user(req, res) {
        try {
            const users = await prisma.user.findMany();
            let usersList = users.map((user) => {
                return {
                    id: user.id,
                    nome: user.name,
                    email: user.email,
                    CPF: user.CPF,
                };
            });
            res.json(usersList);
        }
        catch (error) {
            if (error)
                console.log(`Ocorreu um erro ${error}`);
        }
    }
}
exports.findUser = new FindUser();
