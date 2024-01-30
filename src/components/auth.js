import { useState, useEffect } from "react";
import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export const Auth = () => {
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleSignInEmail = async () => {
    try {
      await createUserWithEmailAndPassword(auth, signInEmail, signInPassword);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleSignUpEmail = async () => {
    try {
      await signInWithEmailAndPassword(auth, signUpEmail, signUpPassword);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleSignInGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error.message);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <div className="signIn">
        <h1>Sign in</h1>
        <input
          type="text"
          placeholder="Email..."
          value={signInEmail}
          onChange={(e) => setSignInEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password..."
          value={signInPassword}
          onChange={(e) => setSignInPassword(e.target.value)}
        />
        <button onClick={handleSignInEmail}>Sign in</button>
        <button onClick={handleSignInGoogle}>Google</button>
      </div>
      <div className="signUp">
        <h1>Sign up</h1>
        <input
          type="text"
          placeholder="Email..."
          value={signUpEmail}
          onChange={(e) => setSignUpEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password..."
          value={signUpPassword}
          onChange={(e) => setSignUpPassword(e.target.value)}
        />
        <button onClick={handleSignUpEmail}>Sign up</button>
      </div>
      <div className="logOut">
        <h2>Logged {user ? "in" : "out"}</h2>
        {user && <p>Email: {user.email}</p>}
        <button onClick={logOut}>Log out</button>
      </div>
    </>
  );
};
