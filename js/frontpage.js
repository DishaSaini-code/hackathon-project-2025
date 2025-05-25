
// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeLucideIcons();
    initializeMap();
    renderReports();
    renderTips();
    initializeModal();
    updateStats();
});

// Initialize Lucide icons
function initializeLucideIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Sample data
let reports = [
    {
        id: 1,
        location: 'Main Street & 5th Ave',
        type: 'Overflowing Bin',
        status: 'pending',
        date: '2024-05-24',
        description: 'Garbage bin is overflowing, attracting flies and creating smell',
        x: 25,
        y: 30
    },
    {
        id: 2,
        location: 'City Park Entrance',
        type: 'Illegal Dumping',
        status: 'in-progress',
        date: '2024-05-23',
        description: 'Construction waste dumped near park entrance',
        x: 60,
        y: 45
    },
    {
        id: 3,
        location: 'Riverside Walk',
        type: 'Litter',
        status: 'resolved',
        date: '2024-05-22',
        description: 'Plastic bottles and food containers scattered',
        x: 40,
        y: 70
    }
];

// Update statistics
function updateStats() {
    const pendingCount = reports.filter(r => r.status === 'pending').length;
    const progressCount = reports.filter(r => r.status === 'in-progress').length;
    const resolvedCount = reports.filter(r => r.status === 'resolved').length;
    
    document.getElementById('pendingCount').textContent = pendingCount;
    document.getElementById('progressCount').textContent = progressCount;
    document.getElementById('resolvedCount').textContent = resolvedCount;
}

// Initialize modal functionality
function initializeModal() {
    const modal = document.getElementById('reportModal');
    const reportBtn = document.getElementById('reportBtn');
    const closeModal = document.getElementById('closeModal');
    const cancelBtn = document.getElementById('cancelBtn');
    const reportForm = document.getElementById('reportForm');
    
    // Open modal
    reportBtn.addEventListener('click', () => {
        modal.classList.add('active');
    });
    
    // Close modal
    function closeReportModal() {
        modal.classList.remove('active');
        reportForm.reset();
    }
    
    closeModal.addEventListener('click', closeReportModal);
    cancelBtn.addEventListener('click', closeReportModal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeReportModal();
        }
    });
    
    // Handle form submission
    reportForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(reportForm);
        const newReport = {
            id: reports.length + 1,
            location: document.getElementById('location').value,
            type: document.getElementById('type').value,
            description: document.getElementById('description').value,
            urgency: document.getElementById('urgency').value,
            status: 'pending',
            date: new Date().toISOString().split('T')[0],
            x: Math.random() * 80 + 10,
            y: Math.random() * 60 + 20
        };
        
        reports.unshift(newReport);
        renderReports();
        updateStats();
        initializeMap();
        closeReportModal();
        
        // Show success message
        alert('Report submitted successfully!');
    });
}

// Get status icon HTML
function getStatusIcon(status) {
    switch (status) {
        case 'pending':
            return '<i data-lucide="clock"></i>';
        case 'in-progress':
            return '<i data-lucide="alert-triangle"></i>';
        case 'resolved':
            return '<i data-lucide="check-circle"></i>';
        default:
            return '<i data-lucide="clock"></i>';
    }
}

// Format status for display
function formatStatus(status) {
    return status.replace('-', ' ').toUpperCase();
}

// Toggle Login/Signup Forms
document.getElementById('loginTab').addEventListener('click', function() {
    document.getElementById('loginTab').classList.add('active');
    document.getElementById('signupTab').classList.remove('active');
    document.getElementById('loginForm').style.display = '';
    document.getElementById('signupForm').style.display = 'none';
});

document.getElementById('signupTab').addEventListener('click', function() {
    document.getElementById('signupTab').classList.add('active');
    document.getElementById('loginTab').classList.remove('active');
    document.getElementById('signupForm').style.display = '';
    document.getElementById('loginForm').style.display = 'none';
});

// Dummy submit handlers (replace with actual authentication logic)
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Login functionality goes here!');
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Signup functionality goes here!');
});
