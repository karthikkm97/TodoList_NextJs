import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://karthik:JX8HJFz0uG1KoDrS@cluster0.qbijp.mongodb.net/todo-list');
    console.log("DB connected");

}