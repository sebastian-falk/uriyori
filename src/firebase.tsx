// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgpIDI48uTk4un92svR_S9uPt3t_h3OuE",
  authDomain: "ourcookbook-ff516.firebaseapp.com",
  projectId: "ourcookbook-ff516",
  storageBucket: "ourcookbook-ff516.appspot.com",
  messagingSenderId: "71475837405",
  appId: "1:71475837405:web:4a1bf4581d45b731301e34",
  measurementId: "G-K5HJJ3XNTN",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
