const mongoose = require("mongoose");

function connectDb() {
    mongoose.connect("mongodb+srv://akshay:akshay@cluster0.xweru.mongodb.net/")
        .then(() => {
            console.log("MongoDB connected");
        })
        .catch((error) => {
            console.error("Error connecting to MongoDB:", error.message);
        });
}

module.exports = connectDb;
