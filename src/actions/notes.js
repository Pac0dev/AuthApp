import Swal from "sweetalert2";
import {db} from "../firebase/firebase-config";
import cloudinaryFileUpload from "../helpers/cloudinaryFileUpload";
import loadNotes from "../helpers/loadNotes";
import {types} from "../types/types";

export const startAddingNewNote = () => {
	return async (dispatch, getState) => {
		const {uid} = getState().auth;

		const newNote = {
			title: '',
			body: '',
			date: new Date().getTime(),
		};

		try {
			const doc = await db.collection(`${uid}/journal/notes`).add(newNote);
			dispatch(activeNote(doc.id, newNote));
			dispatch(addNewNote({id: doc.id, ...newNote}));
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

export const startSaveNote = (note) => {
	return (dispatch, getState) => {
		const {uid} = getState().auth;

		//we delete image url because its optional, and firebase doesnt accept undefined in collections/docs
		if(note.imageUrl === undefined || note.imageUrl === null) delete note.imageUrl;

		const noteToFireStore = {...note};
		delete noteToFireStore.id;

		console.log(noteToFireStore);

		db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFireStore)
			.then(() => {
				Swal.fire({
					  position: 'top-end',
					  icon: 'success',
					  title: 'Your note has been saved',
					  showConfirmButton: false,
					  timer: 1500
				});
				dispatch(refreshNotes(note.id, noteToFireStore, 'add'));
			})
			.catch((err) => {
				console.warn(err, 'error updating the note');
			});
	}
}

export const startUplaodingImageCloudinary = (file) => {
	return (dispatch, getState) => {
		const {activeNote} = getState().notes;
		cloudinaryFileUpload(file)
			.then((secure_url) => {
				dispatch(addUrlToNote(secure_url));
			})
			.catch((err) => {
				Swal.fire({
					icon: 'error',
					title: 'Uploading image error'
					text: err,
				});
			})
	}
}

export const addUrlToNote = (secure_url) => ({
	type: types.notesFileUrl,
	payload: secure_url,
})

export const loadNotesAction = (notes) => ({
	type: types.notesLoad,
	payload: notes, 
});


export const activeNote = (id, note) => ({
	type: types.notesActive,
	payload: {
		id,
		...note
	}
});

export const refreshNotes = (id, note) => ({
	type: types.notesUpdated,
	payload: {
		note: {
			id, 
			...note,
		},
	}
});

export const addNewNote = (note) => ({
	type: types.notesAddNew,
	payload: note,
});