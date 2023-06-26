import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class FindUser {
  public async user(req: Request, res: Response) {
    const users = await prisma.user.findMany();
    users.map((user) => {
      return res.json({
        id: user.id,
        nome: user.name,
        email: user.email,
        CPF: user.CPF,
      });
    });
  }
}

export const findUser = new FindUser();
