// Show/hide sections
const aboutSection = document.getElementById('aboutSection');
const helpSection = document.getElementById('helpSection');
const dashboardSection = document.getElementById('dashboardSection');

document.getElementById('aboutNav').onclick = (e) => {
  e.preventDefault();
  aboutSection.style.display = '';
  helpSection.style.display = 'none';
  dashboardSection.style.display = 'none';
};
document.getElementById('helpNav').onclick = (e) => {
  e.preventDefault();
  aboutSection.style.display = 'none';
  helpSection.style.display = '';
  dashboardSection.style.display = 'none';
};
document.getElementById('dashboardNav').onclick = (e) => {
  e.preventDefault();
  aboutSection.style.display = 'none';
  helpSection.style.display = 'none';
  dashboardSection.style.display = '';
};

// Modal logic
const modal = document.getElementById('loginModal');
const loginBtn = document.getElementById('loginNav');
const closeModal = document.getElementById('closeModal');

loginBtn.onclick = function() {
  modal.style.display = "block";
}
closeModal.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
