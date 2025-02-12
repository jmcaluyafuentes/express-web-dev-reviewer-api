const generateQuestion = document.getElementById('generate-question');
const questionContainer = document.getElementById('question-container');

currentQuestion = null;

generateQuestion.addEventListener('click', async () => {
    try {
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

        data.choices.forEach((choice, index) => {
            const choiceContainer = document.createElement('div');

                const choiceInput = document.createElement('input');
                choiceInput.type = 'radio';
                choiceInput.name = 'choice';
                choiceInput.value = 'choice';
                choiceInput.id = `choice${index}`;

                const choiceLabel = document.createElement('label');
                choiceLabel.htmlFor = `choice${index}`;
                choiceLabel.textContent = choice;

                choiceContainer.appendChild(choiceInput);
                choiceContainer.appendChild(choiceLabel);

            questionContainer.appendChild(choiceContainer);
        })




    } catch (error) {
        console.log('Error fetching the question: ', error);
    }




})