import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class Produto {
  public async criarProduto(req: Request, res: Response) {
    let { nome, preco, descricao, quantidade } = req.body;

    try {
      await prisma.produto.create({
        data: {
          nome: nome.toLowerCase(),
          preco: Number(preco),
          descricao,
          quantidade: Number(quantidade),
        },
      });
      res.redirect("/produtos");
    } catch (error) {
      if (error) console.log(`Ocorreu um erro ${error}`);
    }
  }
}

export const produto: Produto = new Produto();
