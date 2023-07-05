import Router from "koa-router";

import {
    createUser,
    getUsers,
    updateUser,
    deleteUser
} from "../controllers/user-controllers.js";

const router = new Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get("/", getUsers);
router.post("/", createUser);
router.patch("/:userId", updateUser);
router.delete("/:userId", deleteUser);

export const userRoutes = router;
