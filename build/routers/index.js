"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const Home_1 = require("./home/Home");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", Home_1.homePage.home);
