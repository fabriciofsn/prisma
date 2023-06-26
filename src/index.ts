import { App } from "./server/server";

new App().server.listen(3000, () => {
  console.log("Server started!");
});
