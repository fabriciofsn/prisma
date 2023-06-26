import { Request, Response } from "express";

class Home {
  public home(Req: Request, res: Response) {
    return res.json({
      message: "Home Page",
    });
  }
}

export const homePage = new Home();
