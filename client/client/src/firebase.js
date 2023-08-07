import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZvQqqdHPAdScoB62BySjEUfFFe7iBuBI",
  authDomain: "clone-911bc.firebaseapp.com",
  projectId: "clone-911bc",
  storageBucket: "clone-911bc.appspot.com",
  messagingSenderId: "1039545117702",
  appId: "1:1039545117702:web:80d3efeb6aa38d86e26787",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;
