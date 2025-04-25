import mongoose from "mongoose";

const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
    throw new Error("MONGODB_URI environment variable is not defined");
}

export const connectDB = async () => {
    try {
        const {connection} = await mongoose.connect(MONGODB_URI);
        if (connection.readyState === 1) {
            console.log("MongoDB is already connected");
            return Promise.resolve(true);
        }
    } catch (error) {
        console.error("MongoDB connection error:", error);
        return Promise.reject(false);
    }
};