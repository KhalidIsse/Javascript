const button = document.querySelector('#myButton')

// button.addEventListener('click', function(){
//     alert('Button was clicked')
// })

function handleClick() {
    console.log('Button clicked!');
}

button.addEventListener('click', handleClick);


document.querySelector('#removeButton').addEventListener('click', function () {
    button.removeEventListener('click', handleClick);
    console.log('Click event removed.');
});


document.querySelector('#registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.querySelector('#username').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirmPassword').value;
    const error = document.querySelector('#error');

    error.textContent = ''; // Clear previous errors

    // Username validation
    if (username === '') {
        error.textContent = 'Username is required.';
        return;
    }

    // Email validation (basic pattern check)
		const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email.match(emailPattern)) {
        error.textContent = 'Please enter a valid email address.';
        return;
    }

    // Password validation
    if (password.length < 8) {
        error.textContent = 'Password must be at least 8 characters long.';
        return;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        error.textContent = 'Passwords do not match.';
        return;
    }

    // If all validations pass
    error.textContent = 'Registration successful!';
});

