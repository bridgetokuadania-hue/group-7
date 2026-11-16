
const params = new URLSearchParams(window.location.search);
const userId = params.get("userId");

const supportUsers = [
    {
        userId: "ICT-001",
        name: "Peter James",
        department: "ICT"
    },
    {
        userId: "REG-001",
        name: "Registry Support",
        department: "Registry"
    },
    {
        userId: "FIN-001",
        name: "Finance Support",
        department: "Finance"
    }
];

const currentUser = supportUsers.find(function(user) {
    return user.userId === userId;
});

const supportName = document.getElementById("supportName");
const supportDepartment = document.getElementById("supportDepartment");
const supportTicketCount = document.getElementById("supportTicketCount");
const supportTicketDisplay = document.getElementById("supportTicketDisplay");

if (!currentUser) {
    supportName.textContent = "Support account not found.";
} else {
    supportName.textContent = `Welcome, ${currentUser.name}`;
    supportDepartment.textContent = `Department: ${currentUser.department}`;

    function displaySupportTickets() {
        const departmentTickets = tickets.filter(function(ticket) {
            return ticket.department === currentUser.department;
        });

        supportTicketCount.textContent = departmentTickets.length;
        supportTicketDisplay.innerHTML = "";

        if (departmentTickets.length === 0) {
            supportTicketDisplay.textContent = "No tickets assigned to your department.";
            return;
        }

        departmentTickets.forEach(function(ticket) {
            const card = document.createElement("div");

            card.innerHTML = `
                <h2>${ticket.ticketNumber}</h2>
                <p>Name: ${ticket.fullName}</p>
                <p>User ID: ${ticket.userId}</p>
                <p>Category: ${ticket.category}</p>
                <p>Subject: ${ticket.subject}</p>
                <p>Description: ${ticket.description}</p>
                <p>Priority: ${ticket.priority}</p>
                <p>Status: ${ticket.status}</p>
                <p>Date: ${ticket.dateCreated.toLocaleString()}</p>

                <label>Update Status:</label>
                <select class="statusSelect">
                    <option value="Open">Open</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Resolved">Resolved</option>
                    <option value="Closed">Closed</option>
                </select>
                <hr>
            `;

            const statusSelect = card.querySelector(".statusSelect");
            statusSelect.value = ticket.status;

            statusSelect.addEventListener("change", function() {
                ticket.status = statusSelect.value;
            });

            supportTicketDisplay.appendChild(card);
        });
    }

    displaySupportTickets();
}
