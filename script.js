document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (validateForm()) {
            // If the form is valid, you can submit it
            console.log('Form submitted successfully');
            form.submit();
        }
    });

    function validateForm() {
        let isValid = true;

        // Reset previous error messages
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(message => message.remove());

        // Validate Full Name
        const fullName = document.getElementById('fullName');
        if (fullName.value.trim() === '') {
            showError(fullName, 'Full Name is required');
            isValid = false;
        }

        // Validate Email
        const email = document.getElementById('email');
        if (!isValidEmail(email.value)) {
            showError(email, 'Please enter a valid email address');
            isValid = false;
        }

        // Validate Password
        const password = document.getElementById('password');
        if (password.value.length < 8) {
            showError(password, 'Password must be at least 8 characters long');
            isValid = false;
        }

        // Validate Age
        const age = document.getElementById('age');
        if (age.value < 18) {
            showError(age, 'You must be at least 18 years old');
            isValid = false;
        }

        return isValid;
    }

    function showError(input, message) {
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.style.color = 'red';
        errorElement.style.fontSize = '14px';
        errorElement.style.marginTop = '5px';
        errorElement.textContent = message;
        input.parentNode.appendChild(errorElement);
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});

