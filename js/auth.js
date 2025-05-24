const authForm = document.getElementById('authForm');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const authError = document.getElementById('authError');

loginBtn.onclick = async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  try {
    await auth.signInWithEmailAndPassword(email, password);
    window.location.href = 'dashboard.html';
  } catch (error) {
    authError.textContent = error.message;
  }
};

registerBtn.onclick = async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    await db.collection('users').doc(userCredential.user.uid).set({
      email: userCredential.user.email,
      reportsCount: 0
    });
    window.location.href = 'dashboard.html';
  } catch (error) {
    authError.textContent = error.message;
  }
};
