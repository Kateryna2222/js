const credentials = {
    login: 'admin',
    password: 'qwerty',
};

function login() {
    const enteredUsername = document.getElementById("usernameInput").value;
    const enteredPassword = document.getElementById("passwordInput").value;

    if (credentials.login === enteredUsername && credentials.password === enteredPassword) {
        alert("Login successful!");
    } 
    else {
        alert("Invalid username or password. Please try again.");
    }
}
