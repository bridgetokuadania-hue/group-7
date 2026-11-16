const loginForm = document.getElementById("loginForm");

const userIdInput = document.getElementById("userId");

const passwordInput = document.getElementById("password");
const users = [
    {
        userId: "2601200803",
        password: "ikay123",
        name: "Eric",
        role: "student"
    },

    {
        userId: "2601202159",
        password: "allan123",
        name: "Allan",
        role: "staff"
    },

    {
        userId: "ICT-001",
        password: "peter123",
        name: "Peter James",
        role: "support",
        department: "ICT"
    },

    {
        userId: "ADM-001",
        password: "sarah123",
        name: "Sarah",
        role: "admin"
    },

    {
    userId: "REG-001",
    password: "registry123",
    name: "Registry Support",
    role: "support",
    department: "Registry"
},

{
    userId: "FIN-001",
    password: "finance123",
    name: "Finance Support",
    role: "support",
    department: "Finance"
}
];
loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const enteredUserId = userIdInput.value.trim();
    const enteredPassword = passwordInput.value;

    const currentUser = users.find(function(user) {
        return user.userId === enteredUserId &&
               user.password === enteredPassword;
    });

    if (!currentUser) {
        alert("Invalid User ID or Password");
        return;
    }

    switch (currentUser.role) {

    case "student":
        window.location.href = 
    `student.html?userId=${currentUser.userId}`;
        break;

    case "staff":
        window.location.href =
    `staff.html?userId=${currentUser.userId}`;
        break;

    case "support":
        window.location.href =
    `support.html?userId=${currentUser.userId}`;
        break;

    case "admin":
        window.location.href =
    `admin.html?userId=${currentUser.userId}`;
        break;
}

});
