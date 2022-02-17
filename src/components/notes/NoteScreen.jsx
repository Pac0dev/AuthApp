import {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";

import { activeNote as setActiveNote} from "../../actions/notes";
import useForm from "../../hooks/useForm";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {

	const {activeNote} = useSelector(state => state.notes);
	const [formValues, handleInputChange, reset] = useForm(activeNote);
	const {title, body, imageUrl} = formValues;

	const activeNoteId = useRef(activeNote.id);
	const dispatch = useDispatch();


	useEffect(() => {
		if(activeNoteId.current !== activeNote.id) {
			reset(activeNote.note);
			activeNoteId.current = activeNote.id;
		};
	},[activeNote]);

	//effect who listen to formvalues change to modify our activeNote in store
	useEffect(() => {
		dispatch(setActiveNote(formValues.id, {...formValues}));
	}, [formValues, dispatch])

	return (
		<div className="notes__main-content">
			<NotesAppBar />
			<div className="notes__content">
				<input
					className="notes__input"
					type="text"
					placeholder="Some awesome title..."
					autoComplete="off"
					name="title"
					value={title}
					onChange={handleInputChange}
				/>
				<textarea
					placeholder="What happened today?"
					className="notes__textarea"
					name="body"
					value={body}
					onChange={handleInputChange}
				></textarea>
				{imageUrl !== undefined && (
					<div className="notes__image">
						<img
							src="https://media.istockphoto.com/photos/mountain-landscape-ponta-delgada-island-azores-picture-id944812540?k=20&m=944812540&s=612x612&w=0&h=U3sC5L6ZJY2oHC33eixu4CcB15JsgKl0Wnhtcpf_p40="
							alt="decoration image | image about life"
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default NoteScreen;
