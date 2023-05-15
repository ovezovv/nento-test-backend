import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  username: String,
  userId: String,
  accessToken: String
});

export const User = mongoose.model('User', userSchema);