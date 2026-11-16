const ticketForm = document.getElementById("ticketForm");
const ticketDisplay = document.getElementById("ticketDisplay");
const departmentFilter = document.getElementById("departmentFilter");
const priorityFilter = document.getElementById("priorityFilter");
const statusFilter = document.getElementById("statusFilter");
const ticketSearch = document.getElementById("ticketSearch");
const dateSort = document.getElementById("dateSort");
const totalTickets = document.getElementById("totalTickets");

const openTickets = document.getElementById("openTickets");

const inProgressTickets = document.getElementById("inProgressTickets");

const resolvedTickets = document.getElementById("resolvedTickets");

const closedTickets = document.getElementById("closedTickets");

const ictTickets = document.getElementById("ictTickets");

const registryTickets = document.getElementById("registryTickets");

const financeTickets = document.getElementById("financeTickets");
// const tickets = [
//     {
//         ticketNumber: "HDP-0001",
//         fullName: "John Mark",
//         userType: "Student",
//         userId: "STU-1024",
//         email: "john@example.com",
//         category: "Wi-Fi Connectivity",
//         priority: "High",
//         subject: "Campus Wi-Fi not working",
//         description: "Unable to connect to the campus Wi-Fi.",
//         department: "ICT",
//         status: "Open",
//         dateCreated: new Date("2026-11-13T09:00:00")
//     },

//     {
//         ticketNumber: "HDP-0002",
//         fullName: "Mary Jane",
//         userType: "Student",
//         userId: "STU-2045",
//         email: "mary@example.com",
//         category: "Tuition Balance",
//         priority: "Medium",
//         subject: "Incorrect tuition balance",
//         description: "My tuition balance appears incorrect.",
//         department: "Finance",
//         status: "In Progress",
//         dateCreated: new Date("2026-11-14T10:30:00")
//     },

//     {
//         ticketNumber: "HDP-0003",
//         fullName: "Peter James",
//         userType: "Student",
//         userId: "STU-3012",
//         email: "peter@example.com",
//         category: "Missing Examination Results",
//         priority: "Low",
//         subject: "Missing examination results",
//         description: "My examination results are not appearing.",
//         department: "Registry",
//         status: "Resolved",
//         dateCreated: new Date("2026-11-15T08:15:00")
//     }
// ];

let ticketCounter = 4;
const prioritySort = document.getElementById("prioritySort");

function getFormData() {

    const ticketData = {
        fullName: document.getElementById("fullName").value.trim(),
        userType: document.getElementById("userType").value,
        userId: document.getElementById("userId").value.trim(),
        email: document.getElementById("email").value.trim(),
        category: document.getElementById("category").value,
        priority: document.getElementById("priority").value,
        subject: document.getElementById("subject").value.trim(),
        description: document.getElementById("description").value.trim()
    };

    return ticketData;
}
ticketForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const ticketData = getFormData();

    const errorMessage = validateTicket(ticketData);

    if (errorMessage) {
        alert(errorMessage);
        return;
    }
    const department = assignDepartment(ticketData.category);
     ticketData.department = department;   
     const ticketNumber = generateTicketNumber();
     ticketData.ticketNumber = ticketNumber;
     ticketData.status = "Open";
     ticketData.dateCreated = new Date();
     tickets.push(ticketData);
     updateDashboard(); 
     filterTickets();
     ticketForm.reset();
     console.log(tickets);
    console.log("Ticket information is valid:", ticketData);
});

function validateTicket(ticketData) {

    if (!ticketData.fullName) {
        return "Please enter your full name.";
    }

    if (!ticketData.userType) {
        return "Please select your user type.";
    }

    if (!ticketData.userId) {
        return "Please enter your student/staff number.";
    }

    if (!ticketData.email) {
        return "Please enter your email address.";
    }

    if (!ticketData.category) {
        return "Please select a complaint category.";
    }

    if (!ticketData.priority) {
        return "Please select a priority.";
    }

    if (!ticketData.subject) {
        return "Please enter a ticket subject.";
    }

    if (!ticketData.description) {
        return "Please describe your problem.";
    }

    return "";
}
function assignDepartment(category) {

    switch (category) {

        // ICT department
        case "Wi-Fi Connectivity":
        case "Email Account Issue":
        case "Forgotten Portal Password":
        case "Portal Login Problem":
            return "ICT";

        // Registry department
        case "Course Registration":
        case "Course Change":
        case "Missing Examination Results":
        case "Registration Status":
            return "Registry";

        // Finance department
        case "Tuition Payment":
        case "Tuition Balance":
            return "Finance";

        default:
            return "Unassigned";
    }
}
function generateTicketNumber() {

    const ticketNumber = `HDP-${String(ticketCounter).padStart(4, "0")}`;

    ticketCounter++;

    return ticketNumber;
}
    function displayTicket(ticketData) {

    const ticketCard = document.createElement("div");
    const ticketDate = ticketData.dateCreated.toLocaleDateString();
    const ticketTime = ticketData.dateCreated.toLocaleTimeString();
    ticketCard.innerHTML = `
        <h2>Ticket Details</h2>

        <h3>${ticketData.ticketNumber}</h3>

        <p><strong>Full Name:</strong> ${ticketData.fullName}</p>

        <p><strong>User Type:</strong> ${ticketData.userType}</p>

        <p><strong>Student/Staff Number:</strong> ${ticketData.userId}</p>

        <p><strong>Email:</strong> ${ticketData.email}</p>

        <p><strong>Category:</strong> ${ticketData.category}</p>

        <p><strong>Priority:</strong> ${ticketData.priority}</p>

        <p><strong>Subject:</strong> ${ticketData.subject}</p>

        <p><strong>Description:</strong> ${ticketData.description}</p>

        <p><strong>Assigned Department:</strong> ${ticketData.department}</p>
        <p><strong>Status:</strong> ${ticketData.status}</p>

        <label>Update Status:</label>

        <select class="status-select">
        <option value="Open">Open</option>
        <option value="In Progress">In Progress</option>
        <option value="Resolved">Resolved</option>
        <option value="Closed">Closed</option>
        </select>
        <p><strong>Date:</strong> ${ticketDate}</p>
        <p><strong>Time:</strong> ${ticketTime}</p>

    `;
    const statusSelect = ticketCard.querySelector(".status-select");

    statusSelect.value = ticketData.status;
    
    statusSelect.addEventListener("change", function() {

    ticketData.status = statusSelect.value;
    updateDashboard();
    filterTickets();

});
    ticketDisplay.appendChild(ticketCard);
}
function filterTickets() {

    const selectedDepartment = departmentFilter.value;
    const selectedPriority = priorityFilter.value;
    const selectedStatus = statusFilter.value;
    const searchTerm = ticketSearch.value.toLowerCase().trim();

    const filteredTickets = tickets.filter(function(ticket) {

        const matchesDepartment =
            selectedDepartment === "all" ||
            ticket.department === selectedDepartment;

        const matchesPriority =
            selectedPriority === "all" ||
            ticket.priority === selectedPriority;

        const matchesStatus =
            selectedStatus === "all" ||
            ticket.status === selectedStatus;

        const matchesSearch =
            ticket.ticketNumber.toLowerCase().includes(searchTerm) ||
            ticket.fullName.toLowerCase().includes(searchTerm) ||
            ticket.subject.toLowerCase().includes(searchTerm);

        return matchesDepartment &&
               matchesPriority &&
               matchesStatus &&
               matchesSearch;
    });

    const priorityOrder = {
        High: 3,
        Medium: 2,
        Low: 1
    };
    //  console.log(priorityOrder.High);
    const sortedTickets = [...filteredTickets];

    if (prioritySort.value === "highToLow") {

        sortedTickets.sort(function(a, b) {
            return priorityOrder[b.priority] - priorityOrder[a.priority];
        });

    } else if (prioritySort.value === "lowToHigh") {

        sortedTickets.sort(function(a, b) {
            return priorityOrder[a.priority] - priorityOrder[b.priority];
        });

    }
    if (dateSort.value === "newest") {

    sortedTickets.sort(function(a, b) {
        return new Date(b.dateCreated) - new Date(a.dateCreated);
    });

} else if (dateSort.value === "oldest") {

    sortedTickets.sort(function(a, b) {
        return new Date(a.dateCreated) - new Date(b.dateCreated);
    });

}

    displayTickets(sortedTickets);
}
departmentFilter.addEventListener("change", filterTickets);

priorityFilter.addEventListener("change", filterTickets);

statusFilter.addEventListener("change", filterTickets);

ticketSearch.addEventListener("input", filterTickets);

prioritySort.addEventListener("change", filterTickets);
dateSort.addEventListener("change", filterTickets);
function displayTickets(ticketArray) {

    ticketDisplay.innerHTML = "";

    ticketArray.forEach(function(ticket) {
        displayTicket(ticket);
    });

}
function updateDashboard() {

    totalTickets.textContent = tickets.length;
    const statusCounts = tickets.reduce(function(counts, ticket) {

    counts[ticket.status] = (counts[ticket.status] || 0) + 1;

    return counts;

}, {});
openTickets.textContent = statusCounts.Open || 0;

inProgressTickets.textContent = statusCounts["In Progress"] || 0;

resolvedTickets.textContent = statusCounts.Resolved || 0;

closedTickets.textContent = statusCounts.Closed || 0;
const departmentCounts = tickets.reduce(function(counts, ticket) {

    counts[ticket.department] = (counts[ticket.department] || 0) + 1;

    return counts;

}, {});
ictTickets.textContent = departmentCounts.ICT || 0;

registryTickets.textContent = departmentCounts.Registry || 0;

financeTickets.textContent = departmentCounts.Finance || 0;

}
filterTickets();
updateDashboard();
