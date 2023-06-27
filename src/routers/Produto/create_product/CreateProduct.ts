import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class CreateProduct {
  public async Product(req: Request, res: Response) {
    let { nome, preco, descricao, quantidade } = req.params;
    let price = Number(preco);

    try {
      let createProduct = await prisma.produto.create({
        data: {
          nome,
          price,
          descricao,
          quantidade,
        },
      });
    } catch (error) {
      if (error) console.log(`Ocorreu um erro ${error}`);
    }
  }
}
