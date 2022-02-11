import JournalEntries from "./JournalEntries"

const Sidebar = () => {
	return ( 
		<aside className="journal__sidebar">
			<nav className="journal__sidebar-navbar">
				<h3>
					<i className="far fa-moon"></i>
					<span> Francisco</span>
				</h3>
				<button className="btn">
					Logout
				</button>
			</nav>
			<div className="journal__new-entry">
				<i className="far fa-calendar-plus fa-5x"></i>
				<p className="mt-5">New Entry</p>
			</div>
			<JournalEntries/>
		</aside>
	)
}

export default Sidebar
