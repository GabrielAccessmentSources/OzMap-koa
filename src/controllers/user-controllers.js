
export const getUsers = async(ctx) => {
    console.log("here");
    return ctx.body = { message: "Hello from controller" };
};

export const createUser = async(ctx) => {
    console.log("create user");
};

export const editUser = async(ctx) => {
    console.log("create user");
};