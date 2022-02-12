import {firebase, googleAuthProvider} from '../firebase/firebase-config.js';
import { types } from "../types/types";

export const startLoginWithEmailAndPassowrd = (email, password) => {
	return (dispatch) => {
	}
}

export const startGoogleLogin = () => {
	return (dispatch) => {
		firebase.auth().signInWithPopup(googleAuthProvider).then(userCred => {
			const {uid, displayName} = userCred.user;

			dispatch(login(uid, displayName));
		})
	}
}

export const login = (uid, displayName) => ({
	type: types.login,
	payload: {
		uid,
		displayName,
	},
});