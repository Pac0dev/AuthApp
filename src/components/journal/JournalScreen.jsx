import {useSelector} from "react-redux"
import NoteScreen from "../notes/NoteScreen"
import NothingSelected from "./NothingSelected"
import Sidebar from "./Sidebar"

const JournalScreen = () => {
	const {activeNote} = useSelector(s => s.notes);
	return (
		<div className="journal__main-content">
			<Sidebar/>
			<main>
				{activeNote !== null ? <NoteScreen/> : <NothingSelected/> }
			</main>
		</div>
	)
}

export default JournalScreen
