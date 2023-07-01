import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class FindByName {
  public async findProduct(req: Request, res: Response) {
    let { nome } = req.body;

    let search = await prisma.produto.findMany({
      where: {
        nome: {
          startsWith: nome.toLowerCase(),
        },
      },
    });
    res.json(search);
  }
}

export const findName: FindByName = new FindByName();
