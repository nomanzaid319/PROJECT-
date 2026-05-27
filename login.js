// function login() {
//     // Login logic here
//     let email = document.getElementById('email').value;
//     let password = document.getElementById('password').value;
//     // For demonstration, we'll just log the email and password
//     console.log('Email:', email);
//     console.log('Password:', password);
    
// }
function login() {
    // Get the email and password values from the input fields
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Validate the email and password (this is just a simple example, you should implement proper validation)
    if (email === '' || password === '') {
        alert('Please fill in all fields.');
        return;
    }

    // For demonstration, we'll just log the email and password
    console.log('Email:', email);
    console.log('Password:', password);
}

// function register() {
//     // Registration logic here
//     let email = document.getElementById('email').value;
//     let password = document.getElementById('password').value;
//     // For demonstration, we'll just log the email and password
//     console.log('Email:', email);
//     console.log('Password:', password);
// }

// function onclick-login-btn() {
//     // Get the email and password values from the input fields
//     let email = document.getElementById('email').value;
//     let password = document.getElementById('password').value;

//     // Validate the email and password (this is just a simple example, you should implement proper validation)
//     if (email === '' || password === '') {
//         alert('Please fill in all fields.');
//         return;
//     }
//     // For demonstration, we'll just log the email and password
//     console.log('Email:', email);
//     console.log('Password:', password);
// }