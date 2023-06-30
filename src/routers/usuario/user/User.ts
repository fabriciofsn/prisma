import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class User {
  public async getData(req: Request, res: Response) {
    let { name, email, CPF } = req.body;

    try {
      await prisma.user.create({
        data: {
          name,
          email,
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
