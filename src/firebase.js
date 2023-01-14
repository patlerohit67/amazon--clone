import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBty3tAt6A6LnKkhzestN9VAkFdqiLnfPY",
//   authDomain: "e-commerce-web-clone.firebaseapp.com",
//   projectId: "e-commerce-web-clone",
//   storageBucket: "e-commerce-web-clone.appspot.com",
//   messagingSenderId: "741033072661",
//   appId: "1:741033072661:web:57b3a2ffec8f83b0ff561c",
//   measurementId: "G-3BV3EESHZ3" 
// };

const firebaseConfig = {
  apiKey: "AIzaSyD8Azizk7EMrZ9f2cYNlyoC6gRC2tGaL8M",
  authDomain: "clone-7d650.firebaseapp.com",
  projectId: "clone-7d650",
  storageBucket: "clone-7d650.appspot.com",
  messagingSenderId: "642967170060",
  appId: "1:642967170060:web:165b4db9db84d7c2569229",
  measurementId: "G-WFENK8FTHY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };