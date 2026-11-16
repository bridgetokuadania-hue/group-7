# Campus Helpdesk Ticket Portal

**Group 7 | Front-end prototype**

The Campus Helpdesk Ticket Portal is a web-based prototype designed to help students and staff submit campus support requests and help support departments organise and track those requests.

## Project overview

The portal brings support requests for different campus departments into one interface. Instead of relying only on verbal reports or informal messages, users can submit a ticket with a subject, description, category and priority. The system assigns the ticket to the appropriate department based on its category.

The prototype includes separate views for students, staff, support teams and administrators.

## Main features

- Public homepage with Home, About, Services, Contact, Login and Sign Up sections.
- Demo login with role-based navigation.
- Ticket submission form with user details, category, priority, subject and description.
- Automatic department assignment based on the selected complaint category.
- Automatic ticket number generation using the `HDP-0001` format.
- Ticket status tracking: Open, In Progress, Resolved and Closed.
- Ticket search, filtering and sorting.
- Student and staff dashboards showing tickets associated with their user IDs.
- Department support dashboards showing tickets assigned to ICT, Registry or Finance.
- Admin dashboard with ticket totals, status summaries and department summaries.
- Responsive CSS styling for different screen sizes.

## User roles

| Role | What the role can do |
|---|---|
| Student | Submit a support request and view tickets associated with their student ID. |
| Staff | View tickets associated with their staff ID. |
| Support team | View tickets assigned to their department and update ticket statuses. |
| Administrator | View all tickets and dashboard summaries. |

## Departments and ticket routing

The department is assigned automatically from the selected complaint category. The prototype includes these departments:

- **ICT** — for issues such as Wi-Fi connectivity and other technology support.
- **Registry** — for academic records, examination results and related services.
- **Finance** — for tuition balances and finance-related issues.

The category-to-department mapping is implemented in the JavaScript function `assignDepartment()`.

## Ticket workflow

1. A student or staff member signs in.
2. The user submits a support request.
3. The system generates a ticket number.
4. The system assigns the ticket to a department based on its category.
5. The relevant support team views the ticket and updates its status.
6. The administrator can view tickets and overall dashboard summaries.

The ticket statuses are:

- **Open** — the request has been submitted and is awaiting action.
- **In Progress** — the support team is working on it.
- **Resolved** — the reported issue has been addressed.
- **Closed** — the request has been formally completed.

## Technologies used

- **HTML5** — page structure and forms.
- **CSS3** — layout, styling and responsive design.
- **JavaScript** — demo login, ticket creation, department assignment, filtering, sorting, status updates and dashboard calculations.
- **Visual Studio Code and Live Server** — development and local testing.
- **Git and GitHub** — version control and collaboration.

## Project structure

The project is organised into separate HTML pages, stylesheets and JavaScript files. The main pages and scripts include:

```text
campus-helpdesk-ticket-portal/
├── index.html
├── login.html
├── signup.html
├── submit-ticket.html
├── student.html
├── staff.html
├── support.html
├── admin.html
├── style.css
├── tickets-data.js
├── login.js
├── signup.js
├── script.js
├── student.js
├── staff.js
├── support.js
└── admin.js
```

Make sure the script references in each HTML page use the exact filenames in the project folder. The shared ticket data file must load before any page-specific script that uses the `tickets` array.

## Running the project

1. Clone or download this repository.
2. Open the project folder in Visual Studio Code.
3. Confirm that all HTML, CSS and JavaScript files are in the expected locations.
4. Open `index.html` with the Live Server extension.
5. Use the demo accounts below to explore the different dashboards.

## Demo accounts

These accounts are for demonstrating the front-end prototype only.

| Role | User ID | Demo password |
|---|---|---|
| Student | `STU-1024` | `john123` |
| Staff | `STF-2045` | `mary123` |
| ICT Support | `ICT-001` | `peter123` |
| Registry Support | `REG-001` | `registry123` |
| Finance Support | `FIN-001` | `finance123` |
| Administrator | `ADM-001` | `sarah123` |

Do not use real personal information or real passwords with this demonstration project.

## Important prototype limitations

This project is a **front-end demonstration**, not a production-ready helpdesk system.

- Demo accounts and passwords are stored in client-side JavaScript. This is not secure authentication.
- Role-based page navigation is simulated in the browser. A production system needs server-side authentication and authorization.
- Ticket records are held in JavaScript arrays in the browser. They are not stored in a shared database, so changes may be lost on refresh and are not automatically shared between separate pages or users.
- The sign-up page demonstrates form validation and an approval message; it does not create a persistent account.
- A production version should use a backend API and database, validate permissions on the server, securely store credentials, and maintain a shared ticket history.

## Team responsibilities

| Member | Responsibility |
|---|---|
| Bridget Okuadania | HTML development and explanation |
| Eric Andruale | HTML development and explanation |
| chelangat linas | CSS styling and responsive design |
| Kalibara Allan | JavaScript functionality and logic |

## Future improvements

- Add a backend API and shared database for persistent ticket storage.
- Implement secure authentication and server-side role permissions.
- Make ticket updates synchronise across all dashboards.
- Add notifications when tickets are assigned or their status changes.
- Add ticket history, timestamps and reporting.

## Acknowledgement

Developed by **Group 7** as an academic web application project.
