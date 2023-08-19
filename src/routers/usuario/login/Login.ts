import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class Login {
  public async login(req: Request, res: Response) {
    let { email, senha } = req.body;

    try {
      let user = await prisma.user.findMany();
    } catch (e) {
      if (e) console.log(`Dados incorretos ${e}`);
    }
  }
}

export const login: Login = new Login();
