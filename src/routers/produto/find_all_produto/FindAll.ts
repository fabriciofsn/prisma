import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class FindAll {
  public async findProducts(req: Request, res: Response) {
    let products = await prisma.produto.findMany();

    let product = products.map((itens) => {
      return {
        nome: itens.nome,
        preco: itens.preco,
        descricao: itens.descricao,
        quantidade: itens.quantidade,
      };
    });

    res.json(product);
  }
}

export const product: FindAll = new FindAll();
