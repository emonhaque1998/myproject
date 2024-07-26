// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGaf1OPzpfghHI0x-2Q5kRWEteDnQUwN4",
  authDomain: "developereman-ee569.firebaseapp.com",
  projectId: "developereman-ee569",
  storageBucket: "developereman-ee569.appspot.com",
  messagingSenderId: "829556051694",
  appId: "1:829556051694:web:88c1e63c1479c96eca6dff",
  measurementId: "G-RFB5ZDPXTQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
