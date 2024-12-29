document.querySelector('.subBtn').addEventListener('click', function () {

    const correctUsername = 'FarhanAlam964';
    const correctPassword = 'alif6789';

    const usernameInput = document.querySelector('.username').value;
    const passwordInput = document.querySelector('.password').value;

    if (usernameInput === correctUsername && passwordInput === correctPassword) {
        // Redirect to home.html if credentials match
        window.location.href = 'home.html';
    } else {
        // Show an alert if credentials are incorrect
        alert('Invalid username or password. Please try again.');
    }
});