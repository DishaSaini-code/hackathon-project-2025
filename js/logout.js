
// Logout functionality
function handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
        logout();
        // Redirect to login page or refresh current page
        window.location.reload();
    }
}

// Add logout button event listener when implemented
document.addEventListener('DOMContentLoaded', function() {
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
});
