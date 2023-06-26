const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = () => {
    return mongoose.connect(process.env.MOGODB_URL);
}
module.exports = connectDB;