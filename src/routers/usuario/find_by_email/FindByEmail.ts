import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class FindByEmail {
  public async users(req: Request, res: Response) {
    const { email } = req.body;
    try {
      const users = await prisma.user.findUnique({
        where: {
          email,
        },
      });
      res.json(users);
    } catch (error) {
      if (error) console.log(`Ocorreu um erro ${error}`);
    }
  }
}

export const findByEmail: FindByEmail = new FindByEmail();
