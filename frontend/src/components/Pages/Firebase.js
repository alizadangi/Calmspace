
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCfHG_UCw5QLXBw0UOUdjx1wwDonTJU06Q",
    authDomain: "calmspace-6f9b5.firebaseapp.com",
    projectId: "calmspace-6f9b5",
    storageBucket: "calmspace-6f9b5.firebasestorage.app",
    messagingSenderId: "463603054509",
    appId: "1:463603054509:web:3b1122f866bcd01dce1324",
    measurementId: "G-MB2EXZS9M6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
