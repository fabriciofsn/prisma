import { Router } from "express";
import { homePage } from "./home/Home";
import { user } from "./user/User";
import { findUser } from "./find_user/FindUser";

const router: Router = Router();

router.get("/", homePage.home);
router.post("/cadastrar/:name/:email/:CPF", user.getData);
router.get("/usuarios", findUser.user);

export { router };
