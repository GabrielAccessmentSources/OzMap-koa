import Router from "koa-router";

import {
    createUser,
    getUsers,
    updateUser
} from "../controllers/user-controllers.js";

const router = new Router();

router.get("/", getUsers);
router.post("/", createUser);
router.patch("/:userId", updateUser);

export const userRoutes = router;
