import { User } from "../models/user.js";

const data= [
    { name: "Gabriel", email: "gabriel@example.com", age: 28 },
    { name: "John", email: "john@example.com", age: 40 },
    { name: "Johanna", email: "johanna@example.com", age: 30 },
    { name: "Edward", email: "edward@example.com", age: 50 },
    { name: "Jose", email: "jose@example.com", age: 29 },
    { name: "Amy", email: "amy@example.com", age: 18 },
    { name: "Harriet", email: "harriet@example.com", age: 76 },
];
export const mockData = async() => {
    const users = await User.findAll();

    if(users.length === 0) {
        for (let i = 0; i < data.length; i++) {
            await User.create({
                name: data[i].name,
                email: data[i].email,
                age: data[i].age
            });
        }
    }
};
