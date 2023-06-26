import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class User {
  public async getData(req: Request, res: Response) {
    let { name, email, CPF } = req.params;
    const newUser = await prisma.user
      .create({
        data: {
          name: name,
          email: email,
          CPF: CPF,
        },
      })
      .then(() => res.redirect("/"));
    console.log(newUser);
  }
}

export const user = new User();
