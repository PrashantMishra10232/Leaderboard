import mongoose from "mongoose";

const leaderBoardUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  totalPoints: {
    type: Number,
    default: 0
  }
});

export const LeaderBoardUser = mongoose.model("LeaderBoardUser",leaderBoardUserSchema)