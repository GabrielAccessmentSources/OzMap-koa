import Router from "koa-router";

import { getUsers } from "../controllers/user-controllers.js";

const router = new Router();

router.get("/", getUsers);

export const userRoutes = router;
