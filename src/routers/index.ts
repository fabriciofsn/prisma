import { Router } from "express";
import { homePage } from "./home/Home";
import { user } from "./user/User";

const router: Router = Router();

router.get("/", homePage.home);
router.post("/cadastrar/:name/:email/:CPF", user.getData);

export { router };
