"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const Home_1 = require("./home/Home");
const User_1 = require("./usuario/user/User");
const FindUser_1 = require("./usuario/find_user/FindUser");
const FindByEmail_1 = require("./usuario/find_by_email/FindByEmail");
const FindByName_1 = require("./usuario/find_by_name/FindByName");
const Produto_1 = require("./produto/registrar_produto/Produto");
const router = (0, express_1.Router)();
exports.router = router;
// USUÁRIO
router.get("/", Home_1.homePage.home);
router.post("/cadastrar", User_1.user.getData);
router.get("/users", FindUser_1.findUser.user);
router.get("/user/email", FindByEmail_1.findByEmail.users);
router.get("/users/name", FindByName_1.findByName.usersName);
// PRODUTO
router.post("/produto", Produto_1.produto.criarProduto);
