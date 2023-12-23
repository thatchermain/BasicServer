import mongoose, { Schema } from 'mongoose';

const ResultSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  numberOfQuestionsAnswered: {
    type: Number,
    required: true,
  },
  correctAnswer: {
    type: Number,
    required: true,
  },
  wrongAnswer: {
    type: Number,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

export const ResultModel = mongoose.model('results', ResultSchema);
