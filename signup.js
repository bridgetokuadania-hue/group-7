
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const userId = document.getElementById("userId").value.trim();
    const email = document.getElementById("email").value.trim();
    const userType = document.getElementById("userType").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const signupMessage = document.getElementById("signupMessage");

    if (password !== confirmPassword) {
        signupMessage.textContent = "Passwords do not match.";
        return;
    }

    signupMessage.textContent =
        "Registration details received. Account creation requires administrator approval.";

    signupForm.reset();
});
