
// Handle pickup requests (placeholder for future implementation)
function requestPickup(reportId) {
    const report = reports.find(r => r.id === reportId);
    if (report && report.status === 'pending') {
        report.status = 'in-progress';
        renderReports();
        updateStats();
        initializeMap();
        alert('Pickup request sent to municipality!');
    }
}

// Update report status (for admin/municipality use)
function updateReportStatus(reportId, newStatus) {
    const report = reports.find(r => r.id === reportId);
    if (report) {
        report.status = newStatus;
        renderReports();
        updateStats();
        initializeMap();
    }
}