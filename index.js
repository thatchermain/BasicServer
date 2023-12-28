import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';

import { ResultModel } from './models/ResultModel.js';

//BoilerPlate
dotenv.config();

const app = express();
const port = process.env.API_PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

mongoose.connect(process.env.MONGO, {}).then(console.log('Connected to DB'));

//

app.post('/sendResults', async (req, res) => {
  const receivedData = req.body.finalData;
  const newResult = new ResultModel(
    receivedData
    // user: req.body.user,
    // region: req.body.region,
    // allQuestions: req.body.allQuestions,
    // numberOfQuestionsAnswered: req.body.numberOfQuestionsAnswered,
    // correctAnswer: req.body.correctAnswer,
    // wrongAnswer: req.body.wrongAnswer,
    // score: req.body.score,
  );
  console.log(receivedData);
  newResult.save();
});

app.get('/getResults', async (req, res) => {
  const data = await ResultModel.find({});
  await res.send(data);
});

app.listen(port, () => console.log(`Port ${port} ==> Server is running...`));
