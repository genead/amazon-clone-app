import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCd6-wrs4wMEL4i4XptfqSfZ4BzDqkvX4s",
	authDomain: "clone-e4e44.firebaseapp.com",
	projectId: "clone-e4e44",
	storageBucket: "clone-e4e44.appspot.com",
	messagingSenderId: "1055368466295",
	appId: "1:1055368466295:web:6784257f661cb34a87db72",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
