"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const routers_1 = require("../routers");
const body_parser_1 = __importDefault(require("body-parser"));
class App {
    constructor() {
        this.server = (0, express_1.default)();
        this.middleWare();
        this.routes();
    }
    middleWare() {
        this.server.use(express_1.default.json());
        this.server.use(body_parser_1.default.json());
        this.server.use(body_parser_1.default.urlencoded({ extended: true }));
    }
    routes() {
        this.server.use(routers_1.router);
    }
}
exports.App = App;
