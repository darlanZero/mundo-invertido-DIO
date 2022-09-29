
  // Import the functions you need from the SDKs you need
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCdQaU31D2r_rAD1pOxRO5G6iP8_fkQy74",
    authDomain: "mundo-invertido-dio-746c9.firebaseapp.com",
    projectId: "mundo-invertido-dio-746c9",
    storageBucket: "mundo-invertido-dio-746c9.appspot.com",
    messagingSenderId: "263009920415",
    appId: "1:263009920415:web:3bc80dc0d783e5bc9e49aa",
    measurementId: "G-F12QMFQE7V"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  export default app