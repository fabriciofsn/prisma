"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class CreateProduct {
    async Product(req, res) {
        let { nome, preco, descricao, quantidade } = req.params;
        try {
            let createProduct = await prisma;
        }
        catch (error) {
            if (error)
                console.log(`Ocorreu um erro ${error}`);
        }
    }
}
