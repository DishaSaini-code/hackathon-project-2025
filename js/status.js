const statusList = document.getElementById('statusList');
auth.onAuthStateChanged(user => {
  if (!user) return;
  db.collection('reports').where('userId', '==', user.uid)
    .orderBy('createdAt', 'desc')
    .onSnapshot(snapshot => {
      statusList.innerHTML = '';
      snapshot.forEach(doc => {
        const data = doc.data();
        const li = document.createElement('li');
        li.textContent = `${data.description} - Status: ${data.status}`;
        statusList.appendChild(li);
      });
    });
});
