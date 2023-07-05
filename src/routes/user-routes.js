import Router from "koa-router";

import {
    createUser,
    getUsers,
    updateUser,
    deleteUser
} from "../controllers/user-controllers.js";

const router = new Router();

router.get("/", getUsers);
router.post("/", createUser);
router.patch("/:userId", updateUser);
router.delete("/:userId", deleteUser);

export const userRoutes = router;
