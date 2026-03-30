document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("fileInput");
    const preview = document.getElementById("preview");

    if (fileInput && preview) {
        fileInput.addEventListener("change", function (event) {
            const file = event.target.files[0];

            if (file) {
                const reader = new FileReader();

                reader.onload = function (e) {
                    preview.src = e.target.result;
                };

                reader.readAsDataURL(file);
            }
        });
    }

    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            let employees = JSON.parse(localStorage.getItem("employees")) || [];

            const employee = {
                firstName: document.getElementById("firstName")?.value || "",
                lastName: document.getElementById("lastName")?.value || "",
                phone: document.getElementById("phone")?.value || "",
                email: document.getElementById("email")?.value || "",
                address: document.getElementById("address")?.value || "",
                dob: document.getElementById("dob")?.value || "",
                position: document.getElementById("position")?.value || "",
                image: preview ? preview.src : "images/employee.png"
            };

            employees.push(employee);
            localStorage.setItem("employees", JSON.stringify(employees));

            alert("Employee saved successfully!");
            window.location.href = "view-contacts.html";
        });
    }
    if (document.getElementById("employeeTable")) {
        loadEmployees();
    }
});
function loadEmployees() {
    const table = document.querySelector("#employeeTable tbody") || document.getElementById("employeeTable");
    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.forEach((emp, index) => {
        let row = table.insertRow();
        row.innerHTML = `
        <td><img src="${emp.image || 'images/employee.png'}" width="50" style="border-radius:50%"></td>
        <td>${emp.firstName}</td>
        <td>${emp.lastName}</td>
        <td>${emp.phone}</td>
        <td>${emp.address}</td>
        <td>${emp.email}</td>
        <td>${emp.dob}</td>
        <td>${emp.position}</td>
        <td>
            <button onclick="showDetails(${index})">Details</button>
            <button onclick="editContact(${index})">Edit</button>
            <button onclick="deleteContact(${index})">Delete</button>
        </td>
        `;
    });
}
function showDetails(index) {
    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    let emp = employees[index];
    alert(
        `Name: ${emp.firstName} ${emp.lastName}
Phone: ${emp.phone}
Email: ${emp.email}
Position: ${emp.position}`
    );
}
function editContact(index) {
    alert("Edit feature coming soon ");
}
function deleteContact(index) {
    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    let confirmDelete = confirm("Are you sure you want to delete this employee?");
    if (confirmDelete) {
        employees.splice(index, 1);
        localStorage.setItem("employees", JSON.stringify(employees));
        location.reload();
    }
}