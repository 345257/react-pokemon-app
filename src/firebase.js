// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIVFI42LBZitOsosHUZgIVkzvYdhKZ5fI",
  authDomain: "react-poke-app-a85a8.firebaseapp.com",
  projectId: "react-poke-app-a85a8",
  storageBucket: "react-poke-app-a85a8.appspot.com",
  messagingSenderId: "680870564482",
  appId: "1:680870564482:web:2c998dce704316c57ada9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;