import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";

const app = firebase.initializeApp({
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
	measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
});

export const auth = app.auth();
export default app;

const db = getDatabase();

function writeUserData(userId, email) {
	const reference = ref(db, "users/" + userId);

	set(reference, {
		email,
	});
}

// const distanceRef = ref(db, "users/" + userId + "/distance");
// onValue(distanceRef, (snapshot) => {
// 	const data = snapshot.val();
// 	updateDistance(postElement, data);
// });
