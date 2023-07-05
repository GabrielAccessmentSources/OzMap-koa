import { User } from "../models/user.js";

export const getUsers = async(ctx) => {
    try {
        const users = await User.findAll();

        return ctx.body = users;
    }catch (error) {
        return console.log(error);
    }
};

export const createUser = async(ctx) => {
    const { name, email, age } = ctx.request.body;

    try {
        const user = await User.create({
            name: name,
            email: email,
            age: age
        });


        ctx.body = user;
    }catch (error) {
        return console.log(error);
    }
};
export const updateUser = async (ctx) => {

    console.log(ctx.request);
    // const { name, email, age, } = ctx.request.body;

};