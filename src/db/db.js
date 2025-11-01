import mongoose from "mongoose";
import { db_name } from "../constants.js";

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGO_DB_URI}/${db_name}`
    );

    console.log(`${connection.connection.host} mongodb connected succesfully`)
  } catch (error) {
        console.error("srry brother error  agaya databse mein",error)
  }
};


export default connectDb