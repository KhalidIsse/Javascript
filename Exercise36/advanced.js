const form = document.querySelector('#advancedRegistrationForm');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const formError = document.querySelector('#error');   // form-level message
const success = document.querySelector('#success');

// Give every field its own message element (created once, right after the input)
[username, email, password, confirmPassword].forEach(function (field) {
    const message = document.createElement('small');
    message.id = field.id + 'Error';
    message.className = 'error-message';
    field.insertAdjacentElement('afterend', message);
    field.setAttribute('aria-describedby', message.id);
});

// Real-time validation
username.addEventListener('input', function () {
    validateUsername();
    success.textContent = '';
});

email.addEventListener('input', function () {
    validateEmail();
    success.textContent = '';
});

password.addEventListener('input', function () {
    validatePassword();
    // Re-check confirmation too, because it depends on the password
    if (confirmPassword.value !== '') {
        validateConfirmPassword();
    }
    success.textContent = '';
});

confirmPassword.addEventListener('input', function () {
    validateConfirmPassword();
    success.textContent = '';
});

form.addEventListener('submit', function (event) {
    event.preventDefault();

    formError.textContent = '';
    success.textContent = '';

    // Run every validator so each invalid field shows its own message
    const results = [
        { field: username, valid: validateUsername() },
        { field: email, valid: validateEmail() },
        { field: password, valid: validatePassword() },
        { field: confirmPassword, valid: validateConfirmPassword() }
    ];

    const firstInvalid = results.find(function (result) {
        return !result.valid;
    });

    if (firstInvalid) {
        formError.textContent = 'Please fix the highlighted fields.';
        firstInvalid.field.focus();
        return;
    }

    success.textContent = 'Registration successful!';
});

// Validation functions
function validateUsername() {
    if (username.value.trim() === '') {
        setError(username, 'Username is required.');
        return false;
    }
    setSuccess(username);
    return true;
}

function validateEmail() {
    // Note the single backslash before the dot: \. matches a literal dot
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailPattern.test(email.value.trim())) {
        setError(email, 'Please enter a valid email address.');
        return false;
    }
    setSuccess(email);
    return true;
}

function validatePassword() {
    if (password.value.length < 8) {
        setError(password, 'Password must be at least 8 characters long.');
        return false;
    }
    setSuccess(password);
    return true;
}

function validateConfirmPassword() {
    if (confirmPassword.value === '') {
        setError(confirmPassword, 'Please confirm your password.');
        return false;
    }
    if (confirmPassword.value !== password.value) {
        setError(confirmPassword, 'Passwords do not match.');
        return false;
    }
    setSuccess(confirmPassword);
    return true;
}

// Helpers: update the field's own message and styling
function setError(element, message) {
    element.classList.add('invalid');
    element.classList.remove('valid');
    document.getElementById(element.id + 'Error').textContent = message;
}

function setSuccess(element) {
    element.classList.add('valid');
    element.classList.remove('invalid');
    document.getElementById(element.id + 'Error').textContent = '';
}