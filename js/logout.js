document.getElementById('logoutBtn').onclick = function() {
  if(confirm('Are you sure you want to logout?')) {
    auth.signOut().then(function() {
      window.location.href = 'index.html';
    }).catch(function(error) {
      alert('Error logging out: ' + error.message);
    });
  }
};
