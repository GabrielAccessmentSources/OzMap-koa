import Router from "koa-router";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUIKoa from "swagger-ui-koa";

const router = new Router();

// Swagger configuration options
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Your API",
            version: "1.0.0",
            description: "API documentation for Your API",
        },
    },
    // Path to the API docs
    apis: ["./src/routes/*.js"],
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

// Serve swagger API docs
router.get("/api-docs.json", async (ctx) => {
    ctx.body = swaggerSpec;
});

// Serve swagger UI
router.get("/api-docs", swaggerUIKoa(), async (ctx) => {
    // Redirect to the Swagger UI
    ctx.redirect("/api-docs/index.html");
});

export default router;