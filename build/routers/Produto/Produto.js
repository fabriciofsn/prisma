"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class Produto {
    async produto(req, res) {
        let { nome, preco, descricao, quantidade } = req.params;
        try {
            await prisma.produto.create({
                data: {
                    nome,
                    preco: Number(preco),
                    descricao,
                    quantidade: Number(quantidade),
                },
            });
            res.redirect("/");
        }
        catch (e) {
            if (e)
                console.log(`Ocorreu um erro ${e}`);
        }
    }
}
