// login.js
document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Perform login logic here, e.g., send a request to the server
    console.log('Logging in with:', { username, password });
  });