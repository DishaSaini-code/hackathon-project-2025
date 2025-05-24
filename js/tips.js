
// Tips data
const tips = [
    {
        icon: '<i data-lucide="recycle"></i>',
        title: "Proper Recycling",
        description: "Separate plastics, paper, and glass. Clean containers before recycling.",
        category: "Recycling"
    },
    {
        icon: '<i data-lucide="leaf"></i>',
        title: "Composting at Home", 
        description: "Turn organic waste into nutrient-rich compost for your garden.",
        category: "Composting"
    },
    {
        icon: '<i data-lucide="trash-2"></i>',
        title: "Reduce Single-Use Items",
        description: "Use reusable bags, bottles, and containers to minimize waste.",
        category: "Reduction"
    },
    {
        icon: '<i data-lucide="lightbulb"></i>',
        title: "Proper Disposal",
        description: "Use designated bins and follow local waste collection schedules.",
        category: "Disposal"
    }
];

// Render tips
function renderTips() {
    const tipsGrid = document.getElementById('tipsGrid');
    if (!tipsGrid) return;
    
    tipsGrid.innerHTML = tips.map(tip => `
        <div class="tip-item">
            <div class="tip-content">
                <div class="tip-icon">
                    ${tip.icon}
                </div>
                <div class="tip-text">
                    <div class="tip-header">
                        <h3 class="tip-title">${tip.title}</h3>
                        <span class="tip-category ${tip.category.toLowerCase()}">${tip.category}</span>
                    </div>
                    <p class="tip-description">${tip.description}</p>
                </div>
            </div>
        </div>
    `).join('');
    
    // Reinitialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}
