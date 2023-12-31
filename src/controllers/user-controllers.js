import { User } from "../models/user.js";

export const getUsers = async(ctx) => {
    try {
        const users = await User.findAll();

        return ctx.body = users;
    }catch (error) {
        console.error(error);
        ctx.status = 500;
        ctx.body = { message: "OzMap - Error retrieving users" };
    }
};

export const createUser = async(ctx) => {
    const { name, email, age } = ctx.request.body;

    if(name === undefined){
        return ctx.body = { message: "OzMap - You must provide the name." };
    }

    try {
        const user = await User.create({
            name: name,
            email: email,
            age: age
        });

        ctx.body = user;
    }catch (error) {
        console.error(error);
        ctx.status = 500;
        ctx.body = { message: "OzMap - Error creating user" };
    }
};
export const updateUser = async (ctx) => {
    const { userId } = ctx.params;

    try {
        const user = await User.findOne({ where: { id: userId } });

        if (!user) {
            ctx.status = 404;
            ctx.body = { message: "OZMap - User not found" };
            return;
        }

        const { name, email, age } = ctx.request.body;

        if(name === undefined){
            return ctx.body = { message: "OzMap - You must provide the name" };
        }

        user.name = name || user.name;
        user.email = email || user.email;
        user.age = age || user.age;

        await user.save();

        ctx.body = user;
    } catch (error) {
        console.error(error);
        ctx.status = 500;
        ctx.body = { message: "OzMap - Error updating user" };
    }
};

export const deleteUser = async(ctx) => {
    const { userId } = ctx.params;

    try{
        const user = await User.findByPk(userId);

        if (!user) {
            ctx.status = 404;
            ctx.body = { message: "OzMap - User not found" };
            return;
        }

        await user.destroy();
        ctx.body = { message: "OzMap - User deleted successfully" };
    } catch (error) {
        console.error(error);
        ctx.status = 500;
        ctx.body = { message: "OzMap - Error updating user" };
    }
};