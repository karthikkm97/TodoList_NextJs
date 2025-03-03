import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('//mongourl');
    console.log("DB connected");

}
