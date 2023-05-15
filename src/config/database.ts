import mongoose from "mongoose";

const database = async () => {
  const mongoURI: string = process.env.NODE_ENV == 'dev' ? 'mongodb://localhost:27017' : process.env.MONGO_URI;
  mongoose.set("strictQuery", false); // For new Mongoose version * Mongoose 7 *
  await mongoose.connect(mongoURI, { dbName: process.env.MONGO_INITDB_DATABASE });  
}

export default database;