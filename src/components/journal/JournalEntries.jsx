import {useSelector} from "react-redux";
import JournalEntry from "./JournalEntry";
const JournalEntries = () => {

	const notes = useSelector(state => {
		return state.notes.notes;
	});

	return (
		<div className="journal__entries">
			{
				notes.map((note) => {
					return (<JournalEntry key={note.id} {...note}/>)
				})
			}
		</div>
	);
}

export default JournalEntries
