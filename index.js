import Koa from "koa";

import { userRoutes } from "./src/routes/user-routes.js";
import Router from "koa-router";

const app = new Koa();
const router = new Router();

const PORT = process.env.PORT || 5000;

router.use("/users", userRoutes.routes());
app.use(router.routes());

//rota simples pra testar se o servidor está online
// router.get('/', async (ctx) => {
//   ctx.body = `Seu servidor esta rodando em http://localhost:${PORT}`; //http://localhost:3000/
// });
//
// //Uma rota de exemplo simples aqui.
// //As rotas devem ficar em arquivos separados, /src/controllers/userController.js por exemplo
// router.get('/users', async (ctx) => {
//     ctx.status = 200;
//     ctx.body = {total:0, count: 0, rows:[]}
// });
//
// koa
//   .use(router.routes())
//   .use(router.allowedMethods());
//
// const app = koa.listen(PORT);


app.listen(PORT, () => {
    console.log(`OzMap Listening on Port ${PORT}`);
});

export default app;