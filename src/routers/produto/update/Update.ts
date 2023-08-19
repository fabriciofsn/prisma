import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class Update {
  public async updateProduct(req: Request, res: Response) {
    let { nome, email, preco, descricao } = req.body;

    try {
      await prisma.produto.update({
        where: {
          nome,
        },
        data: {},
      });
    } catch (e) {
      res.status(400).json({ Message: e });
    }
  }
}
