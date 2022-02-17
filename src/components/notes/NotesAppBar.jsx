import {useDispatch, useSelector} from "react-redux";
import {startSaveNote, startUplaodingImageCloudinary} from "../../actions/notes";

const NotesAppBar = () => {

	const dispatch = useDispatch();

	const {activeNote} = useSelector(s => s.notes);

	const handleSaveButtonClick = () => {
		dispatch(startSaveNote(activeNote));
	}; 

	const handlePictureClick = () => {
		document.getElementById('file-selector').click();
	};

	const handleFileChange = ({target}) => {
		const file = target.files[0];
		if(file !== undefined) {
			dispatch(startUplaodingImageCloudinary(file));
		}
	}

	return (
		<div className="notes__appbar">
			<span>28 de agosto 2022</span>
			<div>
				<input id="file-selector" type="file" style={{display: 'none'}} onChange={handleFileChange}/>
				<button className="btn" onClick={handlePictureClick}>Picture</button>
				<button className="btn" onClick={handleSaveButtonClick}>Save</button>
			</div>
		</div>
	);
};

export default NotesAppBar;
