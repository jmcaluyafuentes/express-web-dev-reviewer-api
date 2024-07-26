// console.log(document.getElementById('getQuestion'))

document.getElementById('getQuestion').addEventListener('click', () => {
    // console.log('Button clicked!')
    fetch('http://127.0.0.1:4001/questions/random-one')
        .then (response => {
            // console.log('Checking...')
            if (!response.ok) {
                throw new Error ('Server reloading. Try again!' + response.statusText);
            }
            // console.log(response);
            // console.log(typeof response)
            return response.json();
        })
        .then (data => {
            // display the question
            console.log(data);
            document.getElementById('question').textContent = data.question;
        })
        .catch (error => {
            console.log(`Error: ${error.message}`)
            // alert('Server is down. Refresh the webpage and try again later.')
        })
})

// TODO: Display the answer after user clicked the button "Submit Answer"