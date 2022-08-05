// SDKs
import { initializeApp } from "firebase/app";
import { 
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where
} from "firebase/firestore"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { checkExistingUsername } from "./firebase.utils"

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaFuBNuLHfeZdjQe0li4v_wISLhFZXRLY",
  authDomain: "instagramclone-ef748.firebaseapp.com",
  projectId: "instagramclone-ef748",
  storageBucket: "instagramclone-ef748.appspot.com",
  messagingSenderId: "587441491809",
  appId: "1:587441491809:web:358c99dd70cd888c4c7f20",
  measurementId: "G-WKH85TS0LC"
};

// Initialize Database and Authentication
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

// Functionality
export const createUserAuth = async (user) => {
  const { email, name, username, password } = user
  try {
    const userExists = await checkExistingUsername(db, collection, getDocs, query, where, username)
    if (userExists) {
      throw new Error("auth/username-already-in-use")
    }
    const response = await createUserWithEmailAndPassword(auth, email, password)
    const docRef = await addDoc(collection(db, 'users'), { 
      name,
      username,
      auth: response.user.uid
    })
    console.log(docRef)
  }
  catch (error) {
    console.log(error.message)
  }
}