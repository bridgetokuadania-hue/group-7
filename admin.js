
const params = new URLSearchParams(window.location.search);
const userId = params.get("userId");

const adminUsers = [
    {
        userId: "ADM-001",
        name: "Sarah",
        role: "admin"
    }
];

const currentAdmin = adminUsers.find(function(user) {
    return user.userId === userId;
});

if (!currentAdmin) {
    document.getElementById("adminName").textContent =
        "Admin account not found.";
} else {
    document.getElementById("adminName").textContent =
        `Welcome, ${currentAdmin.name}`;

    const statusCounts = tickets.reduce(function(counts, ticket) {
        counts[ticket.status] = (counts[ticket.status] || 0) + 1;
        return counts;
    }, {});

    const departmentCounts = tickets.reduce(function(counts, ticket) {
        counts[ticket.department] = (counts[ticket.department] || 0) + 1;
        return counts;
    }, {});

    document.getElementById("adminTotal").textContent = tickets.length;
    document.getElementById("adminOpen").textContent = statusCounts.Open || 0;
    document.getElementById("adminInProgress").textContent = statusCounts["In Progress"] || 0;
    document.getElementById("adminResolved").textContent = statusCounts.Resolved || 0;
    document.getElementById("adminClosed").textContent = statusCounts.Closed || 0;

    document.getElementById("adminICT").textContent = departmentCounts.ICT || 0;
    document.getElementById("adminRegistry").textContent = departmentCounts.Registry || 0;
    document.getElementById("adminFinance").textContent = departmentCounts.Finance || 0;

    const adminTicketDisplay = document.getElementById("adminTicketDisplay");

    tickets.forEach(function(ticket) {
        const card = document.createElement("div");

        card.innerHTML = `
            <h3>${ticket.ticketNumber}</h3>
            <p>Name: ${ticket.fullName}</p>
            <p>User ID: ${ticket.userId}</p>
            <p>Category: ${ticket.category}</p>
            <p>Department: ${ticket.department}</p>
            <p>Priority: ${ticket.priority}</p>
            <p>Subject: ${ticket.subject}</p>
            <p>Description: ${ticket.description}</p>
            <p>Status: ${ticket.status}</p>
            <p>Date: ${ticket.dateCreated.toLocaleString()}</p>
            <hr>
        `;

        adminTicketDisplay.appendChild(card);
    });
}
