import Express, { Router } from "express";
import { router } from "../routers";
export class App {
  public server: Express.Application;

  constructor() {
    this.server = Express();
    this.middleWare();
    this.routes();
  }

  private middleWare() {
    this.server.use(Express.json());
  }

  private routes() {
    this.server.use(router);
  }
}
