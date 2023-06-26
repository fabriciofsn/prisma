"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Home_1 = require("./home/Home");
const router = (0, express_1.Router)();
router.get("/", Home_1.homePage.home);
