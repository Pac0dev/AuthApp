import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
	return (
		<div className="notes__main-content">
			<NotesAppBar />
			<div className="notes__content">
				<input
					className="notes__input"
					type="text"
					placeholder="Some awesome title..."
					autoComplete="off"
				/>
				<textarea
					placeholder="What happened today?"
					className="notes__textarea"
				></textarea>
				<div className="notes__image">
					<img
						src="https://media.istockphoto.com/photos/mountain-landscape-ponta-delgada-island-azores-picture-id944812540?k=20&m=944812540&s=612x612&w=0&h=U3sC5L6ZJY2oHC33eixu4CcB15JsgKl0Wnhtcpf_p40="
						alt="decoration image | image about life"
					/>
				</div>
			</div>
		</div>
	);
};

export default NoteScreen;
