// import mongoose from "mongoose";
const mongoose = require("mongoose");
import dotenv from "dotenv";

// const connection = {};

dotenv.config();

// async function dbConnect() {
//   if (connection.isConnected) {
//     return;
//   }

//   const db = await mongoose.connect(process.env.CONNECTION_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

//   console.log("db connections 0 burada :", db.connections[0]);
//   connection.isConnected = db.connections[0].readyState;
//   console.log(connection.isConnected);
// }

// export default dbConnect;

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
};

export default dbConnect;
