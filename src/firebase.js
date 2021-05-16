import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCL6EhSiviISk9jLSxka5_95iB3IOqnyZM",
  authDomain: "disney-plus-clone-f669d.firebaseapp.com",
  projectId: "disney-plus-clone-f669d",
  storageBucket: "disney-plus-clone-f669d.appspot.com",
  messagingSenderId: "714722527496",
  appId: "1:714722527496:web:44a3baea248df79cc744bd",
  measurementId: "G-XY73W6PWXC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
