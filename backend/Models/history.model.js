import mongoose from 'mongoose';

const historySchema = new mongoose.Schema({
  claimedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  claimedFor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'LeaderBoardUser',
    required: true
  },
  points: {
    type: Number,
    required: true
  },
//   claimedAt: {
//     type: Date,
//     default: Date.now
//   }
}, {
  timestamps: true
});

export const History = mongoose.model('History', historySchema);
