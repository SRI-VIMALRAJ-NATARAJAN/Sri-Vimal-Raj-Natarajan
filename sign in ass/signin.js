// Function to validate the Sign-In form
function validateForm() {
    let valid = true;

    // Clear previous error messages
    document.getElementById("email-error").innerHTML = "";
    document.getElementById("password-error").innerHTML = "";

    // Validate email
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("email-error").innerHTML = "Please enter a valid email address.";
        valid = false;
    }

    // Validate password
    const password = document.getElementById("password").value;
    if (password.length < 6) {
        document.getElementById("password-error").innerHTML = "Password must be at least 6 characters.";
        valid = false;
    }

    // If form is valid, show login success alert and prevent form submission
    if (valid) {
        alert("Login Successful");
        return false; // Prevent form from submitting (for demonstration purposes)
    }

    // If form is invalid, prevent submission
    return false;
}
