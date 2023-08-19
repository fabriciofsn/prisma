import { Router } from "express";
import { homePage } from "./home/Home";
import { user } from "./usuario/user/User";
import { findUser } from "./usuario/find_user/FindUser";
import { findByEmail } from "./usuario/find_by_email/FindByEmail";
import { findByName } from "./usuario/find_by_name/FindByName";
import { produto } from "./produto/registrar_produto/Produto";
import { product } from "./produto/find_all_produto/FindAll";
import { findName } from "./produto/find_by_name/FindByName";
import { login } from "./usuario/login/Login";

const router: Router = Router();

// USUÁRIO
router.get("/", homePage.home);
router.post("/cadastrar", user.getData);
router.get("/users", findUser.user);
router.get("/user/email", findByEmail.users);
router.get("/users/name", findByName.usersName);
router.post("/login", login.login);

// PRODUTO
router.post("/adicionar", produto.criarProduto);
router.get("/produtos", product.findProducts);
router.get("/produto", findName.findProduct);

export { router };
