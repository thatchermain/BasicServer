import mongoose, { Schema } from 'mongoose';

const answerSchema = new Schema({
  answerId: String,
  answerText: String,
  isCorrect: Boolean,
});

const questionSchema = new Schema({
  questionText: String,
  answerId: String,
  answerText: String,
  isCorrect: Boolean,
});

const ResultSchema = new mongoose.Schema({
  user: String,
  region: String,
  score: Number,
  procentage: Number,
  allQuestions: [questionSchema],
});

export const ResultModel = mongoose.model('results', ResultSchema);
