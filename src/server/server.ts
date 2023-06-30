import Express from "express";
import { router } from "../routers";
import bodyParser from "body-parser";
export class App {
  public server: Express.Application;

  constructor() {
    this.server = Express();
    this.middleWare();
    this.routes();
  }

  private middleWare() {
    this.server.use(Express.json());
    this.server.use(bodyParser.json());
    this.server.use(bodyParser.urlencoded({ extended: true }));
  }

  private routes() {
    this.server.use(router);
  }
}
