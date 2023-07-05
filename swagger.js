import Router from "koa-router";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-koa";

const router = new Router();

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Your API",
            version: "1.0.0",
            description: "API documentation for Your API",
        },
    },
    apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

router.get("/api-docs.json", async (ctx) => {
    ctx.body = swaggerSpec;
});

router.get("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

export default router;