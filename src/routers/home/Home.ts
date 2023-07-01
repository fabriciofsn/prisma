import { Request, Response } from "express";

class Home {
  public home(req: Request, res: Response) {
    return res.json({
      message: "Home Page",
    });
  }
}

export const homePage = new Home();
