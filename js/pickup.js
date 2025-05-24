document.getElementById('pickupForm').onsubmit = async (e) => {
  e.preventDefault();
  const location = document.getElementById('pickupLocation').value;
  const user = auth.currentUser;
  await db.collection('pickups').add({
    userId: user.uid,
    location,
    status: 'pending',
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  });
  alert('Pickup requested!');
  e.target.reset();
};
