
// Render reports list
function renderReports() {
    const reportsList = document.getElementById('reportsList');
    if (!reportsList) return;
    
    if (reports.length === 0) {
        reportsList.innerHTML = '<p>No reports yet. Be the first to report a waste issue!</p>';
        return;
    }
    
    reportsList.innerHTML = reports.map(report => `
        <div class="report-item">
            <div class="report-header">
                <div class="report-content">
                    <div class="report-title">
                        <h3>${report.type}</h3>
                        <div class="report-badge ${report.status}">
                            ${getStatusIcon(report.status)}
                            <span>${formatStatus(report.status)}</span>
                        </div>
                    </div>
                    <p class="report-location">📍 ${report.location}</p>
                    <p class="report-description">${report.description}</p>
                </div>
                <div class="report-date">${report.date}</div>
            </div>
        </div>
    `).join('');
    
    // Reinitialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}
