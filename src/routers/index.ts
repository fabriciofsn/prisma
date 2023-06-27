import { Router } from "express";
import { homePage } from "./home/Home";
import { user } from "./user/User";
import { findUser } from "./find_user/FindUser";
import { findByEmail } from "./find_by_email/FindByEmail";
import { findByName } from "./find_by_name/FindByName";

const router: Router = Router();

router.get("/", homePage.home);
router.post("/cadastrar/:name/:email/:CPF", user.getData);
router.get("/usuarios", findUser.user);
router.get("/user/:email", findByEmail.users);
router.get("/users/:name", findByName.usersName);

export { router };
