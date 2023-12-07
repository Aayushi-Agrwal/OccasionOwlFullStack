// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn4WTG9oJKLrhpySOvLU2iZ-aDe_63ULE",
  authDomain: "ocassionowl.firebaseapp.com",
  projectId: "ocassionowl",
  storageBucket: "ocassionowl.appspot.com",
  messagingSenderId: "981295651403",
  appId: "1:981295651403:web:272afa40716bea3d04cbce",
  measurementId: "G-B75JC2KKT6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;
