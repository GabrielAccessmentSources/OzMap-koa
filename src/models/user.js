import { DataTypes } from "sequelize";

import { sequelize } from "../util/database.js";

export const User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    age: DataTypes.NUMBER
});