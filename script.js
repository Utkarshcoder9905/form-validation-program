document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const errorMessages = document.getElementById("errorMessages");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        errorMessages.innerHTML = "";

        const fullName = form.fullName.value;
        const email = form.email.value;
        const phoneNumber = form.phoneNumber.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (fullName.length < 5) {
            displayError("Full Name should be at least 5 characters long.");
        }

        if (!email.includes("@")) {
            displayError("Email ID must contain the '@' symbol.");
        }

        if (phoneNumber.length !== 10 || phoneNumber === "123456789") {
            displayError("Phone Number should be a 10-digit number and not '123456789'.");
        }
        if (password === "password" || password === fullName || password.length < 8) {
            displayError("Password is not strong enough.");
        }

        if (password !== confirmPassword) {
            displayError("Passwords do not match.");
        }
    });

    function displayError(message) {
        const errorMessage = document.createElement("p");
        errorMessage.textContent = message;
        errorMessages.appendChild(errorMessage);
    }
});