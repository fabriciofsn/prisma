import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

class User {
  public async getData(req: Request, res: Response) {
    let { name, email, senha, CPF } = req.body;
    let pass = await hash(senha, 8);

    try {
      await prisma.user.create({
        data: {
          email,
          senha: pass,
          name,
          CPF,
        },
      });
    } catch (e) {
      if (e) console.log("Ocorreu um erro " + e);
    } finally {
      res.redirect("/users");
    }
  }
}

export const user = new User();
