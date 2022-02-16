import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {activeNote} from '../../actions/notes.js';

import getFormatedDate from '../../helpers/getFormatedDate.js';
const JournalEntry = ({
	id, 
	date,
	title, 
	body,
	imageUrl,
}) => {
	const [dates,] = useState(getFormatedDate(date));
	const dispatch = useDispatch();

	const [day, month] = dates;

	const handleNoteClick = () => {
		dispatch(activeNote(id, {title, body, date, imageUrl}));
	}

	return (
		<div className="journal__entry" onClick={handleNoteClick}>
			{
				imageUrl !== undefined && (<div
					className="journal__entry-picture"
					style={{
						backgroundImage:
							`url(${imageUrl})`,
					}}
				></div>)
			}
			<div className="journal__entry-body">
				<div className="journal__entry-title">{title}</div>
				<div className="journal__entry-content">
					{body}
				</div>
			</div>
			<div className="journal__entry-date-box">
				<span>{day}</span>
				<h4>{month}</h4>
			</div>
		</div>
	);
};

export default JournalEntry;
