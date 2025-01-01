// script.js

// JavaScript to dynamically add an image
window.onload = function() {
    const formContainer = document.querySelector('.form-container');
    const img = document.createElement('img');
    img.src = 'your-image-url.jpg'; // Add your image URL here
    img.alt = 'Login Image';
    img.style.width = '100%';
    img.style.marginBottom = '20px'; // Adjust margin as needed
    formContainer.prepend(img);
};

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve input values
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Basic validation
    if (!email || !password) {
        alert("Please fill in both email and password fields.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Simulate login process (Replace with backend integration later)
    if (email === "test@example.com" && password === "password123") {
        alert("Login successful!");
        // Redirect or perform other actions
        window.location.href = "dashboard.html"; // Example redirection
    } else {
        alert("Invalid email or password. Please try again.");
    }
});

// Function to validate email format
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
