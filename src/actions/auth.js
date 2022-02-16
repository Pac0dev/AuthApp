import Swal from 'sweetalert2';
import {firebase, googleAuthProvider} from '../firebase/firebase-config.js';
import { types } from "../types/types";
import {finishLoading, startLoading} from './ui.js';

export const startLoginWithEmailAndPassword = (email, password) => {
	return (dispatch) => {
		dispatch(startLoading());
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(({user}) => {
				const {displayName, uid} = user;
				dispatch(login(uid, displayName));
				dispatch(finishLoading());
			})
			.catch((err) => {
				console.warn(err);
				Swal.fire({
					title: 'Login Error',
					text: err.message,
					icon: 'error',
					confirmButtonText: 'OK',
				})
				dispatch(finishLoading());
			});
	}
};

export const startRegisterWithNameEmailAndPassword = (name, email, password) => {
	return (dispatch) => {
		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then( ({user}) => {
				//we update the profile because we've dont previous name 
				//as we had in google account register
				user.updateProfile({displayName: name}).then(() => {
					dispatch(login(user.uid, user.displayName));
				});
			})
			.catch(err => {
				Swal.fire({
					title: 'Login Error',
					text: err.message,
					icon: 'error',
					confirmButtonText: 'OK',
				})
			});
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

export const startLogout = () => {
	return (dispatch) => {
		firebase.auth().signOut().then(() => {
			dispatch(logout());
		})
		.catch(err => console.warn(err));
	}
}

export const login = (uid, displayName) => ({
	type: types.login,
	payload: {
		uid,
		displayName,
	},
});

export const logout = () => ({
	type: types.logout, 
});