import { initializeApp } from "firebase/app";
import FirebaseConfig from "./Firebase.config";
//import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    initializeApp(FirebaseConfig);
}
export default initializeAuthentication;