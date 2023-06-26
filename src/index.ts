import { App } from "./server/server";

new App().server.listen(3030, () => {
  console.log("Server started!");
});
