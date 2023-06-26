"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class User {
    async getData(req, res) {
        let { name, email, CPF } = req.params;
        const newUser = await prisma.user
            .create({
            data: {
                name: name,
                email: email,
                CPF: CPF,
            },
        })
            .then(() => res.redirect("/"));
        console.log(newUser);
    }
}
exports.user = new User();
