const params = new URLSearchParams(window.location.search);

const userId = params.get("userId");

console.log(userId);
const studentId = document.getElementById("studentId");
const studentTicketDisplay = document.getElementById("studentTicketDisplay");
studentId.textContent = `Your ID: ${userId}`;
console.log(tickets);
console.log(tickets.length);
const studentTickets = tickets.filter(function(ticket) {
    return ticket.userId === userId;
});
studentTickets.forEach(function(ticket) {
    const ticketCard = document.createElement("div");

    ticketCard.innerHTML = `
        <h2>${ticket.ticketNumber}</h2>

        <p><strong>Full Name:</strong> ${ticket.fullName}</p>
        <p><strong>User Type:</strong> ${ticket.userType}</p>
        <p><strong>User ID:</strong> ${ticket.userId}</p>
        <p><strong>Email:</strong> ${ticket.email}</p>
        <p><strong>Category:</strong> ${ticket.category}</p>
        <p><strong>Department:</strong> ${ticket.department}</p>
        <p><strong>Priority:</strong> ${ticket.priority}</p>
        <p><strong>Subject:</strong> ${ticket.subject}</p>
        <p><strong>Description:</strong> ${ticket.description}</p>
        <p><strong>Status:</strong> ${ticket.status}</p>
        <p><strong>Date Created:</strong> ${ticket.dateCreated.toLocaleString()}</p>
    `;

    studentTicketDisplay.appendChild(ticketCard);
});
const myTicketCount = document.getElementById("myTicketCount");

myTicketCount.textContent = studentTickets.length;