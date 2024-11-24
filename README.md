

# Fullstack_JS_Management
<h2>Goal:</h2>
<p>A full stack js application for managing stock &amp; maintenance</p>
<h2>Features:</h2>
<h3>Module 1: Asset Registration:</h3>
<ul>
  <li>Develop a form to capture details: name, type, purchase date, cost</li>
  <li>Create functionality to categorize assets (e.g., machines, IT equipment, vehicles)</li>
</ul>
<h2>Technology &#x1F680;</h2>
    <li>VueJs</li>
    <li>Tailwind</li>
    <li>Postgres</li>
    <li>Prisma</li>
    <li>Espress</li>
    <li>Yarn</li>
    <li>Typescript</li>
<h2>To do list &#x1F4CB;</h2>
    <h3>Back End</h3>
        <h4>Database scout</h4>
            <li>Table Dioseze(id,name)</li>
            <li>Table District(id,id_Dioseze,name)</li>
            <li>Table Church(id,id_District,name)</li>
            <li>Table Person(id,name,paid,due)</li>
            <li>Table Dioseze_Leader(id,id_Dioseze,id_person)</li>
            <li>Table District_Leader(id,id_District,id_person)</li>
            <li>Table Church_Leader(id,id_Church,id_person)</li>
            <li>Table Church_Apprentice(id,id_Church,id_person)</li>
            <li>Table Church_Member(id,id_Church,id_person)</li>
            <li>View v_Dioseze_Leader(id,id_Dioseze,id_person,name,paid,due)</li>
            <li>View v_District_Leader(id,id_District,id_person,name,paid,due)</li>
            <li>View v_Church_Leader(id,id_Church,id_person,name,paid,due)</li>
            <li>View v_Church_Apprentice(id,id_Church,id_person,name,paid,due)</li>
            <li>View v_Church_Member(id,id_Church,id_person,name,paid,due)</li>
        <h4>Classes</h4>
            <li>class Person(id,name,paid,due)</li>
            <li>class Dioseze(id,name)</li>
            <li>class District(id,idDioseze,name)</li>
            <li>class Church(id,idDistrict,name)</li>
            <li>class DiosezeLeader(id,idDioseze,name,paid,due)</li>
            <li>class DistrictLeader(id,idDistrict,name,paid,due)</li>
            <li>class ChurchLeader(id,idChurch,name,paid,due)</li>
            <li>class ChurchApprentice(id,idChurch,name,paid,due)</li>
            <li>class ChurchMember(id,idChurch,name,paid,due)</li>
        <h4>File</h4>
            <li>index.js</li>
            <ul>
                <li>function getListPerson()</li>
                <li>function updatePayment(id,paid)</li>
            </ul>
    <h3>Front End</h3>
        <h4>Pages</h4>
            <li>Page List Person</li>
            <li>Page insert Person</li>



Web Development To-Do List

Asset List View:
Implement a searchable and sortable table to display asset details.
Module 2: Tracking and Localization
Geolocation Integration:
Integrate a mapping API to display asset locations on-site.
Status Updates:
Add options to update the status of materials (e.g., "In Service," "Under Repair," "Out of Service").
Implement filters based on status.
Module 3: Maintenance
Maintenance Scheduling:
Create a calendar to manage preventive and corrective maintenance schedules.
Enable automated reminders for upcoming maintenance tasks.
Maintenance History:
Store and display historical data for interventions, including associated costs.
Module 4: Accounting and Reporting
Depreciation Calculations:
Implement algorithms for linear and declining balance depreciation.
Financial Reporting:
Integrate accounting tools to automate journal entries.
Develop dashboards for financial insights, including residual value and cumulative costs.
Module 5: Security and Permissions
User Role Management:
Create an admin panel to assign roles (Administrator, Standard User).
Add audit logging to track changes and critical actions.
Module 6: Analytical Dashboard
Key Indicators:
Display metrics like total value, obsolete materials, and average cost per category.
Visualization Tools:
Add charts and graphs for easy interpretation of data.
Module 7: Integration and APIs
Data Export:
Provide options to export data to formats like Excel and PDF.
API Development:
Build APIs for integration with external tools, including AI systems.
