import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class FindByName {
  public async usersName(req: Request, res: Response) {
    let { name } = req.body;
    try {
      const names = await prisma.user.findMany({
        where: {
          name,
        },
      });
      const userName = names.map((name) => {
        return { name };
      });
      res.json(userName);
    } catch (error) {
      if (error) console.log(`Ocorreu um erro ${error}`);
    }
  }
}

export const findByName: FindByName = new FindByName();
