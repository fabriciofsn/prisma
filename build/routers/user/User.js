"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class User {
    async getData(req, res) {
        let { name, email, CPF } = req.params;
        try {
            const newUser = await prisma.user.create({
                data: {
                    name: name,
                    email: email,
                    CPF: CPF,
                },
            });
        }
        catch (e) {
            if (e)
                console.log("Ocorreu um erro " + e);
        }
        finally {
            res.redirect("/");
        }
    }
}
exports.user = new User();
