"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
new server_1.App().server.listen(3000, () => {
    console.log("Server started!");
});
