import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class FindUser {
  public async user(req: Request, res: Response) {
    try {
      const users = await prisma.user.findMany();
      let usersList = users.map((user) => {
        return {
          id: user.id,
          nome: user.name,
          email: user.email,
          senha: user.senha,
          CPF: user.CPF,
        };
      });
      res.json(usersList);
    } catch (error) {
      console.log(`Ocorreu um erro ${error}`);
    }
  }
}

export const findUser = new FindUser();
