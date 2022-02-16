import {db} from "../firebase/firebase-config"

export default function (uid){
	return new Promise((resolve, reject) => {
		const notes = [];
		db.collection(`${uid}/journal/notes`).get().then(querySnapShot => {
			querySnapShot.forEach((doc) => {
				notes.push({id: doc.id, ...doc.data()});
				resolve(notes);
			});
		})
		.catch( err => reject(err.message) );
	});
};
