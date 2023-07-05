import Koa from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";

import { userRoutes } from "./src/routes/user-routes.js";
import { sequelize } from "./src/util/database.js";

const app = new Koa();
const router = new Router();

const PORT = process.env.PORT || 5000;

app.use(bodyParser());

router.use("/users", userRoutes.routes());
app.use(router.routes());

sequelize.sync().then(result => {
    console.log(result);
    app.listen(PORT, () => {
        console.log(`OzMap Listening on Port ${PORT}`);
    });
}).catch(err => {
    console.log(err);
});

export default app;