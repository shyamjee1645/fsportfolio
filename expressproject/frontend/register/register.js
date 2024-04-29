// register.js
document.getElementById('register-form').addEventListener('submit', (event) => {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    // Perform registration logic here, e.g., send a request to the server
    console.log('Registering with:', { username, password, confirmPassword });
  });