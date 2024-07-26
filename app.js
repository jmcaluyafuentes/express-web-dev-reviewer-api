import express from 'express'
import cors from 'cors'

const app = express()

const questions = [
    { id:1, question: 'Fetch API is an asynchronous function. True or False?' },
    { id:2, question: 'When you call "fetch", what does it return?' }
]

app.use(express.json())
app.use(cors())

app.get('/questions', (req, res) => {
    res.send(questions);
})

app.get('/questions/random-one', (req, res) => {
    const randomNumber = Math.floor(Math.random() * questions.length);
    console.log(randomNumber);
    console.log(questions[randomNumber])
    res.status(200).send(questions[randomNumber])
})

app.listen(4001, error => {
    if (error) {
        console.log('Server not running...')
    } else {
        console.log('Server running...')
    }
})