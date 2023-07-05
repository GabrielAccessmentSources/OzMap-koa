import { DataTypes } from "sequelize";
import { v4 as uuidv4 } from "uuid";

import { sequelize } from "../util/database.js";

const User = sequelize.define("User", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    age: DataTypes.NUMBER
});
User.beforeCreate((user) => {
    user.id = uuidv4();
});

export { User };