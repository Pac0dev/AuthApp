const JournalEntry = () => {
	return (
		<div className="journal__entry">
			<div
				className="journal__entry-picture"
				style={{
					backgroundImage:
						"url(https://www.rae.es/sites/default/files/styles/wysiwyg_100_/public/2021-07/ramdomtwitter_Mesa%20de%20trabajo%201.png?itok=JfO9YVoD)",
				}}
			></div>
			<div className="journal__entry-body">
				<div className="journal__entry-title">Un nuevo dia</div>
				<div className="journal__entry-content">
					Laborum occaecat deserunt Lorem ullamco esse voluptate sit
					nisi.
				</div>
			</div>
			<div className="journal__entry-date-box">
				<span>Monday</span>
				<h4>28</h4>
			</div>
		</div>
	);
};

export default JournalEntry;
