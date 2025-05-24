const leaderboardList = document.getElementById('leaderboardList');
db.collection('users').orderBy('reportsCount', 'desc').limit(10).onSnapshot(snapshot => {
  leaderboardList.innerHTML = '';
  snapshot.forEach(doc => {
    const data = doc.data();
    const li = document.createElement('li');
    li.textContent = `${data.email} - ${data.reportsCount} reports`;
    leaderboardList.appendChild(li);
  });
});
