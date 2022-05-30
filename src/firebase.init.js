// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAxT17xsMphptds2VQ4_jwDmdQhnmW8ywA",
	authDomain: "powertools-ad4d4.firebaseapp.com",
	projectId: "powertools-ad4d4",
	storageBucket: "powertools-ad4d4.appspot.com",
	messagingSenderId: "352586660039",
	appId: "1:352586660039:web:265ff66e640f2b011ce6e2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
