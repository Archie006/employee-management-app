function showDetails(id) {
    alert("Showing full employee details for ID " + id + "...");
}

function editEmployee(id) {
    alert("Edit feature coming soon for ID " + id + "!");
}

function deleteEmployee(id) {
    let confirmDelete = confirm("Are you sure you want to delete employee ID " + id + "?");
    if (confirmDelete) {
        alert("Deleted employee ID " + id + "!");
    }
}