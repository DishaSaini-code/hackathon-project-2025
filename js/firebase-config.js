// ...existing code...
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // <-- Add this line
// ...existing code...
const firebaseConfig = {
  apiKey: "AIzaSyCoI6I6bavqBN7WGp9SADPU9bOOUdV6xs0",
  authDomain: "smart-waste-management-1be07.firebaseapp.com",
  projectId: "smart-waste-management-1be07",
  storageBucket: "smart-waste-management-1be07.appspot.com", // <-- Fix typo here
  messagingSenderId: "119639025774",
  appId: "1:119639025774:web:ee7fe68fce7712f82ade7f",
  measurementId: "G-50P935SJQJ"
};
// ...existing code...
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // <-- This now works
export { auth };