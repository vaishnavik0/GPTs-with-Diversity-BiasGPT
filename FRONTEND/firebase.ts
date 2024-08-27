// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCggw3Wj5UFfAaptw2jKtN23aKpSk83_jg",
  authDomain: "biasgpt-bca09.firebaseapp.com",
  projectId: "biasgpt-bca09",
  storageBucket: "biasgpt-bca09.appspot.com",
  messagingSenderId: "241683547190",
  appId: "1:241683547190:web:a35fb74f8f3ebee203c497",
  measurementId: "G-X6GCENWXD4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
 export const db = getFirestore(app);
//  export default db