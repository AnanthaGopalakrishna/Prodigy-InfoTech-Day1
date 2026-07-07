document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginFormContainer = document.getElementById('login-form-container');
    const registerFormContainer = document.getElementById('register-form-container');
    const showRegisterLink = document.getElementById('show-register');
    const showLoginLink = document.getElementById('show-login');

    const loginMessage = document.getElementById('login-message');
    const registerMessage = document.getElementById('register-message');

    const users = {}; // A simple in-memory store for demonstration

    // Function to display messages
    function displayMessage(element, message, type) {
        element.textContent = message;
        element.className = `message ${type}`;
    }

    // Switch to Register form
    showRegisterLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginFormContainer.classList.add('hidden');
        registerFormContainer.classList.remove('hidden');
        loginMessage.textContent = ''; // Clear previous messages
    });

    // Switch to Login form
    showLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        registerFormContainer.classList.add('hidden');
        loginFormContainer.classList.remove('hidden');
        registerMessage.textContent = ''; // Clear previous messages
    });

    // Handle Registration Form Submission
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('register-username').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm-password').value;

        registerMessage.textContent = 'Registering...';
        registerMessage.className = 'message';

        if (password !== confirmPassword) {
            displayMessage(registerMessage, 'Passwords do not match.', 'error');
            return;
        }

        if (users[username]) {
            displayMessage(registerMessage, 'Username already exists.', 'error');
            return;
        }

        // Simulate API call
        setTimeout(() => {
            users[username] = { email, password }; // Store user (in-memory for demo)
            displayMessage(registerMessage, 'Registration successful! You can now log in.', 'success');
            // Optionally switch to login form after successful registration
            // loginFormContainer.classList.remove('hidden');
            // registerFormContainer.classList.add('hidden');
            registerForm.reset(); // Clear the form
        }, 1000);
    });

    // Handle Login Form Submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        loginMessage.textContent = 'Logging in...';
        loginMessage.className = 'message';

        // Simulate API call
        setTimeout(() => {
            if (users[username] && users[username].password === password) {
                displayMessage(loginMessage, `Welcome, ${username}! Login successful.`, 'success');
                // In a real app, you would redirect to a protected page
            } else {
                displayMessage(loginMessage, 'Invalid username or password.', 'error');
            }
        }, 1000);
    });
});
