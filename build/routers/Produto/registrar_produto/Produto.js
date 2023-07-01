"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.produto = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class Produto {
    async criarProduto(req, res) {
        let { nome, preco, descricao, quantidade } = req.body;
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
        catch (error) {
            if (error)
                console.log(`Ocorreu um erro ${error}`);
        }
    }
}
exports.produto = new Produto();
