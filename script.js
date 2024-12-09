// Function to mock Chat
function openChat() {
    alert("Opening chat...");
}

// Function to mock View
function viewDetails() {
    alert("Navigating to details view...");
}

// Function to mock Edit
function editRecord() {
    alert("Opening edit form...");
}

// Function to mock Delete with confirmation
function confirmDelete() {
    const confirmAction = confirm("Are you sure you want to delete this record?");
    if (confirmAction) {
        alert("Record deleted successfully.");
    } else {
        alert("Delete action canceled.");
    }
}

// Toggle dropdown menu on click
document.querySelectorAll('.dots').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const dropdown = button.parentNode;
        dropdown.classList.toggle('active');
    });
});

// Close dropdowns on clicking outside
document.addEventListener('click', (e) => {
    document.querySelectorAll('.action-dropdown').forEach(dropdown => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });
});
