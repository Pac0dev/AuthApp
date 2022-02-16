import {useDispatch, useSelector} from "react-redux";
import {startLogout} from "../../actions/auth";
import {startAddingNewNote} from "../../actions/notes";
import JournalEntries from "./JournalEntries"

const Sidebar = () => {
	const dispatch = useDispatch();
	const {name} = useSelector(state => state.auth);

	const handleLogoutButtonClick = () => {
		dispatch(startLogout());
	}

	const handleAddEntryClick = () => {
		dispatch(startAddingNewNote());
	}

	return ( 
		<aside className="journal__sidebar">
			<nav className="journal__sidebar-navbar">
				<h3>
					<i className="far fa-moon"></i>
					<span> {name}</span>
				</h3>
				<button className="btn" onClick={handleLogoutButtonClick}>
					Logout
				</button>
			</nav>
			<div className="journal__new-entry" onClick={handleAddEntryClick}>
				<i className="far fa-calendar-plus fa-5x"></i>
				<p className="mt-5">New Entry</p>
			</div>
			<JournalEntries/>
		</aside>
	)
}

export default Sidebar
