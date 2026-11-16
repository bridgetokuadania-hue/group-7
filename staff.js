const params = new URLSearchParams(window.location.search);
const userId = params.get("userId");

document.getElementById("staffId").textContent = `Your ID: ${userId}`;

const staffTickets = tickets.filter(function(ticket) {
    return ticket.userId === userId;
});

document.getElementById("staffTicketCount").textContent = staffTickets.length;

const staffTicketDisplay = document.getElementById("staffTicketDisplay");

staffTickets.forEach(function(ticket) {
    const ticketCard = document.createElement("div");

    ticketCard.innerHTML = `
        <h2>${ticket.ticketNumber}</h2>
        <p>Full Name: ${ticket.fullName}</p>
        <p>User Type: ${ticket.userType}</p>
        <p>User ID: ${ticket.userId}</p>
        <p>Email: ${ticket.email}</p>
        <p>Category: ${ticket.category}</p>
        <p>Department: ${ticket.department}</p>
        <p>Priority: ${ticket.priority}</p>
        <p>Subject: ${ticket.subject}</p>
        <p>Description: ${ticket.description}</p>
        <p>Status: ${ticket.status}</p>
        <p>Date Created: ${ticket.dateCreated.toLocaleString()}</p>
    `;

    staffTicketDisplay.appendChild(ticketCard);
});