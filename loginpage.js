document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector('.submit-btn');
    loginButton.addEventListener('click', login);
});

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;

    if (username === "" || password === "") {
        alert("Please fill in both fields.");
        return;
    }

    // Prepare the data to be sent
    const data = {
        username: username,
        password: password
    };

    // Send the data to the backend (Node.js server)
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        // Handle successful login response
        alert(data.message);
    })
    .catch(error => {
        console.error('Error:', error);
        alert("There was an error during login.");
    });
}
