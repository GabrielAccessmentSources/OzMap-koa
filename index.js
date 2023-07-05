import Koa from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";

import { userRoutes } from "./src/routes/user-routes.js";
import swaggerRouter from "./swagger.js";
import { sequelize } from "./src/util/database.js";
import { mockData } from "./src/helpers/mockData.js";

const app = new Koa();
const router = new Router();

const PORT = process.env.PORT || 5000;

app.use(bodyParser());

router.use("/users", userRoutes.routes());
app.use(swaggerRouter.routes());
app.use(router.routes());

sequelize.sync().then(result => {
    console.log(result);
    // Since we don't have env here if you don't want to seed the DB comment this
    mockData().then(() => console.log("OzMap - Data Mocked You're ready to go"));
    app.listen(PORT, () => {
        console.log(`OzMap - Listening on Port ${PORT}`);
    });
}).catch(err => {
    console.log(err);
});


export default app;