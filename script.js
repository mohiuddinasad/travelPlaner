function calculateBudget() {
    let total = 0;

    let checkedItems = document.querySelectorAll("input[type='checkbox']:checked");

    checkedItems.forEach(function(item) {
        total += Number(item.value);
    });

    let startDate = document.getElementById("startDate").value;
    let endDate = document.getElementById("endDate").value;
    let message = document.getElementById("dateMessage");

    if (startDate && endDate) {
        if (startDate > endDate) {
            message.innerText = "End date must be after start date!";
            return;
        } else {
            message.innerText = "";
        }
    }

    document.getElementById("budget").innerText = total;
}

function resetPlanner() {
    // Uncheck all checkboxes
    let checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach(function(item) {
        item.checked = false;
    });

    // Clear dates
    document.getElementById("startDate").value = "";
    document.getElementById("endDate").value = "";

    // Clear message
    document.getElementById("dateMessage").innerText = "";

    // Reset budget
    document.getElementById("budget").innerText = "0";
}