import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("sequelize", "root", "7758773S", {
    dialect: "sqlite",
    host: "localhost",
    storage: "src/db/database.sqlite"
});