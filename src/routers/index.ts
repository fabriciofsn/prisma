import { Router } from "express";
import { homePage } from "./home/Home";
import { user } from "./usuario/user/User";
import { findUser } from "./usuario/find_user/FindUser";
import { findByEmail } from "./usuario/find_by_email/FindByEmail";
import { findByName } from "./usuario/find_by_name/FindByName";

const router: Router = Router();

router.get("/", homePage.home);
router.post("/cadastrar/:name/:email/:CPF", user.getData);
router.get("/users", findUser.user);
router.get("/user/:email", findByEmail.users);
router.get("/users/:name", findByName.usersName);

export { router };
