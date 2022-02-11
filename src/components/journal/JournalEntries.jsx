import JournalEntry from "./JournalEntry";

const JournalEntries = () => {
	return (
		<div className="journal__entries">
			{
				[1,2,3,4,5,6,7,8,9,10].map((entry) => (<JournalEntry/>))
			}
		</div>
	);
}

export default JournalEntries
