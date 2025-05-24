let map;
let marker;

auth.onAuthStateChanged(user => {
  if (!user) window.location.href = 'index.html';
});

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 23.0225, lng: 72.5714 }, // Ahmedabad
    zoom: 12,
  });

  map.addListener("click", (e) => {
    if (marker) marker.setMap(null);
    marker = new google.maps.Marker({
      position: e.latLng,
      map: map,
    });
    document.getElementById('reportForm').dataset.lat = e.latLng.lat();
    document.getElementById('reportForm').dataset.lng = e.latLng.lng();
  });

  // Load existing reports
  db.collection('reports').get().then(snapshot => {
    snapshot.forEach(doc => {
      const data = doc.data();
      const reportMarker = new google.maps.Marker({
        position: { lat: data.lat, lng: data.lng },
        map: map,
        icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
      });
    });
  });
}

window.initMap = initMap;

// Submit report
document.getElementById('reportForm').onsubmit = async (e) => {
  e.preventDefault();
  const lat = parseFloat(e.target.dataset.lat);
  const lng = parseFloat(e.target.dataset.lng);
  const description = document.getElementById('description').value;
  const photo = document.getElementById('photo').files[0];
  const user = auth.currentUser;

  if (!lat || !lng || !photo) {
    alert("Please select a location on the map and upload a photo.");
    return;
  }

  // Upload photo to Firebase Storage
  const photoRef = storage.ref(`reports/${Date.now()}_${photo.name}`);
  await photoRef.put(photo);
  const photoURL = await photoRef.getDownloadURL();

  // Add to Firestore
  await db.collection('reports').add({
    lat, lng, description, photoURL,
    status: 'pending',
    userId: user.uid,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  });

  // Update leaderboard
  const userRef = db.collection('users').doc(user.uid);
  userRef.update({ reportsCount: firebase.firestore.FieldValue.increment(1) });

  alert('Report submitted!');
  e.target.reset();
};
