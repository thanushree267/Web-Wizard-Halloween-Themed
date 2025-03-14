
// login.js

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Implement your validation or AJAX request here
        console.log('Username:', username);
        console.log('Password:', password);

        // Redirect to index page after successful login
        window.location.href = 'wel.html'; // Replace with your actual index page path
    } else {
        document.getElementById('login-message').innerText = 'Please enter both username and password.';
    }
});


