"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class User {
    async getData(req, res) {
        let { name, email, CPF } = req.body;
        try {
            await prisma.user.create({
                data: {
                    name: name,
                    email,
                    CPF,
                },
            });
        }
        catch (e) {
            if (e)
                console.log("Ocorreu um erro " + e);
        }
        finally {
            res.redirect("/users");
        }
    }
}
exports.user = new User();
