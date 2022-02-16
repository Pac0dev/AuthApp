import Swal from "sweetalert2";
import {db} from "../firebase/firebase-config";
import loadNotes from "../helpers/loadNotes";
import {types} from "../types/types";

export const startAddingNewNote = () => {
	return async (dispatch, getState) => {
		const {uid} = getState().auth;

		const newNote = {
			title: '',
			body: '',
			date: new Date().getTime(),
			urlImage: '',
		};

		try {
			const doc = await db.collection(`${uid}/journal/notes`).add(newNote);
			dispatch(activeNote(doc.id, newNote));
		} catch( err ) {
			console.warn(err);
		}
	}
}

export const startLoadingNotes = () => {
	return (dispatch, getState) => {
		const {uid} = getState().auth;

		loadNotes(uid).then(notes => {
			dispatch(loadNotesAction(notes));
		})
		.catch((error) => {
			Swal.fire({
				icon: 'error',
				title: 'Error loading notes',
				text: error,
			});
		});
	}
}

export const loadNotesAction = (notes) => ({
	type: types.notesLoad,
	payload: notes, 
});


export const activeNote = (id, note) => ({
	type: types.notesActive,
	payload: {
		id,
		...note,
	},
})
