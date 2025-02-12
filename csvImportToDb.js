import mongoose from 'mongoose'
import dotenv from 'dotenv'
// import csvtojson from 'csvtojson'
// import fs from fs

dotenv.config();

mongoose.connect(process.env.DB_URI)
    .then(m => console.log(m.connection.readyState === 1 ? 'Mongoose connected' : 'Mongoose failed to connect'))
    .catch(err => console.error(err))

const questions = [
    { question: 'This is a sample question?', answer: 'This is a sample answer.' },
    { question: 'Can you create a question?', answer: 'Answer B' },
];

const Question = mongoose.model('Question', {
    question: {type: String, required: true},
    answer: {type: String, required: true}
});

await Question.create(questions)
    .then(() => console.log('Entries created'));

mongoose.connection.close();
