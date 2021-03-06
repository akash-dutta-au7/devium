const mongoose = require("mongoose");
const config = require("config");
const db = config.get("DATABASE_URI");
require("dotenv").config();
// DB connection

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log("MongoDB Atlas connected.....!!!");
  } catch (error) {
    console.log(error);
    // exit process with fail
    process.exit(1);
  }
};

module.exports = connectDB;
