
// Initialize the map
function initializeMap() {
    const mapContainer = document.getElementById('wasteMap');
    if (!mapContainer) return;
    
    mapContainer.innerHTML = `
        <div class="map-background">
            <div class="map-grid"></div>
            <svg style="position: absolute; inset: 0; width: 100%; height: 100%;">
                <line x1="0%" y1="20%" x2="100%" y2="25%" stroke="#10b981" stroke-width="3" opacity="0.3" />
                <line x1="0%" y1="60%" x2="100%" y2="55%" stroke="#10b981" stroke-width="3" opacity="0.3" />
                <line x1="30%" y1="0%" x2="35%" y2="100%" stroke="#10b981" stroke-width="3" opacity="0.3" />
                <line x1="70%" y1="0%" x2="65%" y2="100%" stroke="#10b981" stroke-width="3" opacity="0.3" />
            </svg>
        </div>
        
        <div class="map-controls">
            <button class="btn btn-primary" onclick="document.getElementById('reportBtn').click()">
                <i data-lucide="map-pin"></i>
                Add Report
            </button>
        </div>
        
        <div class="map-legend">
            <h4>Status Legend</h4>
            <div class="legend-item">
                <div class="legend-color pending"></div>
                <span>Pending</span>
            </div>
            <div class="legend-item">
                <div class="legend-color progress"></div>
                <span>In Progress</span>
            </div>
            <div class="legend-item">
                <div class="legend-color resolved"></div>
                <span>Resolved</span>
            </div>
        </div>
        
        <div class="map-instruction">
            <p>Click markers to view details</p>
        </div>
    `;
    
    // Add markers for each report
    reports.forEach(report => {
        const marker = createMapMarker(report);
        mapContainer.appendChild(marker);
    });
    
    // Reinitialize Lucide icons for new elements
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Create a map marker
function createMapMarker(report) {
    const marker = document.createElement('div');
    marker.className = `map-marker ${report.status}`;
    marker.style.left = `${report.x}%`;
    marker.style.top = `${report.y}%`;
    marker.innerHTML = getMarkerIcon(report.status);
    
    // Add click event for popup
    marker.addEventListener('click', (e) => {
        e.stopPropagation();
        
        // Remove existing popups
        document.querySelectorAll('.marker-popup').forEach(popup => popup.remove());
        
        // Create new popup
        const popup = document.createElement('div');
        popup.className = 'marker-popup';
        popup.innerHTML = `
            <h4>${report.type}</h4>
            <p>${report.location}</p>
            <div class="status-info">
                <span class="status-badge ${report.status}">${formatStatus(report.status)}</span>
                <span style="color: #9ca3af; font-size: 0.75rem;">${report.date}</span>
            </div>
        `;
        
        marker.appendChild(popup);
        
        // Close popup when clicking elsewhere
        setTimeout(() => {
            document.addEventListener('click', function closePopup() {
                popup.remove();
                document.removeEventListener('click', closePopup);
            });
        }, 100);
    });
    
    return marker;
}

// Get marker icon based on status
function getMarkerIcon(status) {
    switch (status) {
        case 'pending':
            return '<i data-lucide="clock"></i>';
        case 'in-progress':
            return '<i data-lucide="alert-triangle"></i>';
        case 'resolved':
            return '<i data-lucide="check-circle"></i>';
        default:
            return '<i data-lucide="trash-2"></i>';
    }
}
