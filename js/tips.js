const tips = [
  "Segregate your waste into wet and dry.",
  "Compost your kitchen waste.",
  "Use reusable bags instead of plastic.",
  "Donate items you no longer use.",
  "Report overflowing bins to your local authority."
];
const tipsList = document.getElementById('tipsList');
tips.forEach(tip => {
  const li = document.createElement('li');
  li.textContent = tip;
  tipsList.appendChild(li);
});
