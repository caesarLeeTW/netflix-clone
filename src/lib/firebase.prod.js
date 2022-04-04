import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

const firebaseConfig = {
  apiKey: "AIzaSyCfqKqn2N-17ITVBUppMtbD7Z7y36kp84I",
  authDomain: "netflix-clone-e307f.firebaseapp.com",
  projectId: "netflix-clone-e307f",
  storageBucket: "netflix-clone-e307f.appspot.com",
  messagingSenderId: "635099469508",
  appId: "1:635099469508:web:4940e3548358ffd663db91",
};

const firebase = Firebase.initializeApp(firebaseConfig);

// seedDatabase(firebase);

export { firebase };
