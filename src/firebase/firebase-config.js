import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAaxgHS92Rvr_Cd83rRSJEKGOFH25xOUw",
  authDomain: "journal-app-course-fd5a5.firebaseapp.com",
  projectId: "journal-app-course-fd5a5",
  storageBucket: "journal-app-course-fd5a5.appspot.com",
  messagingSenderId: "519982185227",
  appId: "1:519982185227:web:3c11bc03bb7f477666800e"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
	db, 
	googleAuthProvider,
	firebase,
}
