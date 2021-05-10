import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAx5WZosp0HsC8G3z3VFkBeWgL_VivnnNg",
    authDomain: "discord-clone-d3499.firebaseapp.com",
    projectId: "discord-clone-d3499",
    storageBucket: "discord-clone-d3499.appspot.com",
    messagingSenderId: "525271163315",
    appId: "1:525271163315:web:2336f0480c010273edebc6",
    measurementId: "G-BLL04N568M"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
