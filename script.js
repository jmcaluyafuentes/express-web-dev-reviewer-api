const generateQuestion = document.getElementById('generate-question');
const questionContainer = document.getElementById('question-container');

currentQuestion = null;

generateQuestion.addEventListener('click', async () => {
    // console.log('clicked')
    const response = await fetch('http://127.0.0.1:4001/questions/random-one');
    const data = await response.json();
    currentQuestion = data;
    // console.log(currentQuestion);

    questionContainer.textContent = '';

    // TODO: Display the currentQuestion to web page
    const questionText = document.createElement('p');
    questionText.textContent = data.question;


    questionContainer.appendChild(questionText);

})