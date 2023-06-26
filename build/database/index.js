"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class RegisterUser {
    async userData() {
        const newUser = await prisma.user.create({
            data: {
                name: "",
                email: "",
                CPF: "",
            },
        });
        console.log(newUser);
    }
    saveUser() {
        this.userData()
            .then(async () => {
            await prisma.$disconnect();
        })
            .catch(async (e) => {
            console.log("Error " + e);
            await prisma.$disconnect();
            process.exit(1);
        });
    }
}
exports.registerUser = new RegisterUser();
