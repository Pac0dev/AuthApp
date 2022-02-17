export default function (notes, noteToUpdateOrCreate) {
	console.log(notes);
	const updatedNotes = notes.map((note) =>
		(note.id === noteToUpdateOrCreate.id) ? noteToUpdateOrCreate : note
	);
	return updatedNotes
};
