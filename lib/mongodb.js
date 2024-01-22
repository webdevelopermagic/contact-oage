const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(process.env.MONGODB_URL);
            console.log("db connected");
        }
    } catch (error) {
        console.log(error);
    }
};

export default connectDB;