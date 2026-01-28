document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    let isValid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const mobile = document.getElementById("mobile").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const terms = document.getElementById("terms").checked;

    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        isValid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").textContent = "Enter a valid email address.";
        isValid = false;
    }

    if (password.length < 8) {
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters.";
        isValid = false;
    }

    if (confirmPassword !== password || confirmPassword === "") {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
        isValid = false;
    }

    const mobilePattern = /^[0-9]{10}$/;
    if (!mobile.match(mobilePattern)) {
        document.getElementById("mobileError").textContent = "Enter a valid 10-digit mobile number.";
        isValid = false;
    }

    // Gender validation
    if (!gender) {
        document.getElementById("genderError").textContent = "Please select your gender.";
        isValid = false;
    }

    // Terms validation
    if (!terms) {
        document.getElementById("termsError").textContent = "You must accept the Terms & Conditions.";
        isValid = false;
    }

    // Submit if valid
    if (isValid) {
        alert("Registration Successful!");
        document.getElementById("registrationForm").reset();
    }
});
