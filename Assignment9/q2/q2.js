window.onload = function () {
    loadEmployees();
};

function loadEmployees() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/employees");

    xhr.onload = function () {
        if (xhr.status === 200) {
            let employees = JSON.parse(xhr.responseText);
            displayEmployees(employees);
        }
    };

    xhr.send();
}

function displayEmployees(employees) {
    let tbody = document.getElementById("employee-body");
    tbody.innerHTML = "";

    employees.forEach(emp => {
        let tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${emp.name}</td>
            <td class="${emp.status}">${emp.status}</td>
            <td>
                <button class="toggle-btn ${emp.status === 'active' ? 'active-btn' : 'inactive-btn'}"
                    onclick="toggleStatus(${emp.id}, this)">
                    Toggle
                </button>
            </td>
        `;

        tbody.appendChild(tr);
    });
}

function toggleStatus(id, button) {
    let row = button.closest("tr");
    let statusCell = row.children[1];
    let currentStatus = statusCell.textContent.trim();

    // New status
    let newStatus = currentStatus === "active" ? "inactive" : "active";

    // Update UI instantly
    statusCell.textContent = newStatus;
    statusCell.className = newStatus;
    button.className = `toggle-btn ${newStatus === "active" ? "active-btn" : "inactive-btn"}`;

    // Send PATCH request
    let xhr = new XMLHttpRequest();
    xhr.open("PATCH", `http://localhost:3000/employees/${id}`);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {
        if (xhr.status !== 200) {
            revertUI();   // If failed → revert
        }
    };

    xhr.onerror = function () {
        revertUI(); // network error
    };

    xhr.send(JSON.stringify({ status: newStatus }));

    // Revert function if request fails
    function revertUI() {
        let revertStatus = currentStatus;
        statusCell.textContent = revertStatus;
        statusCell.className = revertStatus;
        button.className = `toggle-btn ${revertStatus === "active" ? "active-btn" : "inactive-btn"}`;

        document.getElementById("error").textContent = "Failed to update status. Please try again.";
    }
}
