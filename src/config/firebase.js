import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3MowqmEz6k62A7fCUNTdd_Gab4IN25_o",
  authDomain: "fir-learning-664dc.firebaseapp.com",
  projectId: "fir-learning-664dc",
  storageBucket: "fir-learning-664dc.appspot.com",
  messagingSenderId: "386618131637",
  appId: "1:386618131637:web:c268aad9ce11c608a36afc",
  measurementId: "G-CTGTDFXC1Z",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(auth)