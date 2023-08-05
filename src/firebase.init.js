// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDiaNieIiio5jn7mgLdFsAEYPtgd4BArNo",
	authDomain: "manufacturer-website-dd7ea.firebaseapp.com",
	projectId: "manufacturer-website-dd7ea",
	storageBucket: "manufacturer-website-dd7ea.appspot.com",
	messagingSenderId: "1076242664521",
	appId: "1:1076242664521:web:5cd87a2dd2c0167bcd8398",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
