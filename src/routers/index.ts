import { Router } from "express";
import { homePage } from "./home/Home";

const router: Router = Router();

router.get("/", homePage.home);
