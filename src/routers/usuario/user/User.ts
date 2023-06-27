import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class User {
  public async getData(req: Request, res: Response) {
    let { name, email, CPF } = req.params;
    try {
      const newUser = await prisma.user.create({
        data: {
          name: name,
          email: email,
          CPF: CPF,
        },
      });
    } catch (e) {
      if (e) console.log("Ocorreu um erro " + e);
    } finally {
      res.redirect("/");
    }
  }
}

export const user = new User();
