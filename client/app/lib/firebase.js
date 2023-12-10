// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAn4WTG9oJKLrhpySOvLU2iZ-aDe_63ULE",
//   authDomain: "ocassionowl.firebaseapp.com",
//   projectId: "ocassionowl",
//   storageBucket: "ocassionowl.appspot.com",
//   messagingSenderId: "981295651403",
//   appId: "1:981295651403:web:272afa40716bea3d04cbce",
//   measurementId: "G-B75JC2KKT6",
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
//   if(typeof window )
// }

// // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);

// // export const auth = getAuth(app);
// // export default app;

import { getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

if (!getApps.length) {
  initializeApp(firebaseConfig);
  if (typeof window !== "undefined") {
    if ("measurementId" in firebaseConfig) {
      getAnalytics();
    }
  }
}
