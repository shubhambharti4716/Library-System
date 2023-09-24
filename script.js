function validatePasswordMatch() {
    const passwordField = document.getElementById("pass");
    const confirmPasswordField = document.getElementById("cpass");
    const passwordMatchError = document.getElementById("password-match-error");

    if (passwordField.value !== confirmPasswordField.value) {
        passwordMatchError.textContent = "Passwords do not match.";
        return false; // Passwords do not match
    } else {
        passwordMatchError.textContent = "";
        return true; // Passwords match
    }
}

function showcontactusmessage() {
    alert("Coming Soon...");
}

function showLogoutMessage() {
    alert("Coming Soon.");
}

function validateAndSubmit() {
    const requiredInputs = document.querySelectorAll('input[required]');
    let allInputsFilled = true;

    // Clear any previous error messages
    const errorMessages = document.querySelectorAll(".error-message");
    for (const errorMessage of errorMessages) {
        errorMessage.textContent = "";
    }

    const emailField = document.getElementById("email");
    const email = emailField.value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(email)) {
        const emailErrorMessage = document.getElementById("email-error-message");
        emailErrorMessage.textContent = "Please enter a valid email address.";
        allInputsFilled = false;
    }

    for (const input of requiredInputs) {
        if (input.value.trim() === "") {
            const fieldErrorMessage = document.getElementById(`${input.id}-error-message`);
            fieldErrorMessage.textContent = "This field is required.";
            allInputsFilled = false;
        }
    }

    const passwordMatch = validatePasswordMatch();
    if (!passwordMatch) {
        allInputsFilled = false; // Set allInputsFilled to false if passwords don't match
    }

    if (allInputsFilled) {
        alert("Site Under Maintenance!");
        // Reset the form to clear all filled data
        // Reset the form to clear all filled data without an ID
        const form = document.querySelector("form[name='yourFormName']"); 
        if (form) {
            form.reset();
        }

        // Redirect to index.html after a short delay
        setTimeout(function () {
            window.location.href = "index.html"; // Reload index.html
        }, 1000); // Delay seconds
    } else {
        const requiredFieldErrorMessage = document.getElementById("required-field-error");
        requiredFieldErrorMessage.textContent = "Please fill out all required fields correctly before submitting.";
    }
}
