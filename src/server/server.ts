import Express from "express";

export class Server {
  private app: Express.Application;

  private server() {
    this.app = Express();
    this.app.listen(3030, () => {
      console.log("Server started");
    });
  }

  constructor() {
    this.server();
  }
}
